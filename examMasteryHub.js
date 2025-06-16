// examMasteryHub.js - handles rendering and progress tracking for Exam Mastery Hub
import { examData } from './examData.js';

const STORAGE_KEY = 'examHubProgress';

function getStoredProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Helper function to find question details (skill, difficulty)
function getQuestionDetails(questionId) {
  for (const unitKey in examData) {
    for (const aosKey in examData[unitKey]) {
      const aos = examData[unitKey][aosKey];
      if (aos.skills && Array.isArray(aos.skills)) {
        for (const skill of aos.skills) {
          const question = skill.questions.find(q => q.id === questionId);
          if (question) {
            return { skillId: skill.id, difficulty: question.difficulty, questionObj: question };
          }
        }
      }
    }
  }
  return null; // Should not happen if questionId is valid
}

// Streak thresholds
const STREAK_TO_ADVANCE = 2;
const STREAK_TO_REGRESS = 2;

export function recordQuestionResult(skillIdFromContext, questionId, correct) {
  const progress = getStoredProgress();

  // Record individual question result (as before)
  progress[questionId] = { correct, timestamp: Date.now(), attempted: true };

  const questionDetails = getQuestionDetails(questionId);
  if (!questionDetails || questionDetails.skillId !== skillIdFromContext) {
    console.error("Skill ID mismatch or question details not found for adaptive logic.", skillIdFromContext, questionId);
    saveProgress(progress); // Save basic progress anyway
    return;
  }

  const skillId = questionDetails.skillId;
  const difficulty = questionDetails.difficulty;

  // Initialize skillPerformance if it doesn't exist
  if (!progress.skillPerformance) {
    progress.skillPerformance = {};
  }
  if (!progress.skillPerformance[skillId]) {
    progress.skillPerformance[skillId] = {
      currentDifficulty: 'medium', // Default starting difficulty
      easyStreak: 0, mediumStreak: 0, hardStreak: 0,
      easyWrong: 0, mediumWrong: 0, hardWrong: 0,
      history: [] // Optional: to track difficulty changes
    };
  }

  const perf = progress.skillPerformance[skillId];

  if (correct) {
    perf.history.push({ qId: questionId, difficulty, result: 'correct' });
    if (difficulty === 'easy') {
      perf.easyStreak++;
      perf.easyWrong = 0;
      if (perf.easyStreak >= STREAK_TO_ADVANCE) {
        perf.currentDifficulty = 'medium';
        perf.easyStreak = 0;
        perf.history.push({ event: 'Advanced to medium from easy streak' });
      }
    } else if (difficulty === 'medium') {
      perf.mediumStreak++;
      perf.mediumWrong = 0;
      if (perf.mediumStreak >= STREAK_TO_ADVANCE) {
        perf.currentDifficulty = 'hard';
        perf.mediumStreak = 0;
        perf.history.push({ event: 'Advanced to hard from medium streak' });
      }
    } else if (difficulty === 'hard') {
      perf.hardStreak++;
      perf.hardWrong = 0;
      // Stays on hard if correct streak continues
    }
  } else { // Incorrect
    perf.history.push({ qId: questionId, difficulty, result: 'incorrect' });
    if (difficulty === 'easy') {
      perf.easyWrong++;
      perf.easyStreak = 0;
      // Stays on easy if incorrect streak continues
    } else if (difficulty === 'medium') {
      perf.mediumWrong++;
      perf.mediumStreak = 0;
      if (perf.mediumWrong >= STREAK_TO_REGRESS) {
        perf.currentDifficulty = 'easy';
        perf.mediumWrong = 0;
        perf.history.push({ event: 'Regressed to easy from medium wrong streak' });
      }
    } else if (difficulty === 'hard') {
      perf.hardWrong++;
      perf.hardStreak = 0;
      if (perf.hardWrong >= STREAK_TO_REGRESS) {
        perf.currentDifficulty = 'medium';
        perf.hardWrong = 0;
        perf.history.push({ event: 'Regressed to medium from hard wrong streak' });
      }
    }
  }

  saveProgress(progress);
}

export function getProgress() {
  return getStoredProgress();
}

// Helper to get all questions for a skillId
function getSkillById(skillId) {
    for (const unitKey in examData) {
        for (const aosKey in examData[unitKey]) {
            const aos = examData[unitKey][aosKey];
            if (aos.skills && Array.isArray(aos.skills)) {
                const foundSkill = aos.skills.find(s => s.id === skillId);
                if (foundSkill) return foundSkill;
            }
        }
    }
    return null;
}


// New helper function for adaptive question selection
function getNextQuestionAdaptive(skill, progress, skillPerformance) {
  if (!skill || !skill.questions) return null;

  const attemptedQuestionIds = new Set(Object.keys(progress).filter(qid => progress[qid].attempted));

  const availableQuestions = skill.questions.filter(q => q.type === 'multipleChoice' && !attemptedQuestionIds.has(q.id));

  if (availableQuestions.length === 0) return null; // All MCQs attempted or no MCQs

  const difficultiesToTry = [skillPerformance.currentDifficulty, 'easy', 'medium', 'hard'];

  for (const difficulty of difficultiesToTry) {
    const questionInDifficulty = availableQuestions.find(q => q.difficulty === difficulty);
    if (questionInDifficulty) return questionInDifficulty;
  }

  // If no question found in preferred difficulties, return any unattempted MCQ
  return availableQuestions.length > 0 ? availableQuestions[0] : null;
}


function createQuestionElement(question, progress, skillIdToRender) { // Added skillIdToRender
  const wrapper = document.createElement('div');
  wrapper.className = 'mb-4 p-4 border rounded';

  const title = document.createElement('p');
  title.textContent = question.text;
  title.className = 'font-medium mb-2';
  wrapper.appendChild(title);

  const form = document.createElement('form');

  if (question.type === 'shortAnswer') {
    const textArea = document.createElement('textarea');
    textArea.name = question.id;
    textArea.className = 'w-full p-2 border rounded';
    textArea.placeholder = 'Type your answer here...';
    form.appendChild(textArea);
  } else if (question.type === 'extendedResponse') {
    const textArea = document.createElement('textarea');
    textArea.name = question.id;
    textArea.className = 'w-full p-2 border rounded h-40';
    textArea.rows = 6;
    textArea.placeholder = 'Type your detailed response here...';
    form.appendChild(textArea);
  } else { // Multiple-choice logic
    question.options.forEach(opt => {
      const label = document.createElement('label');
      label.className = 'block mb-1';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = question.id;
      input.value = opt;
      label.appendChild(input);
      label.append(' ' + opt);
      form.appendChild(label);
    });
  }

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'mt-2 px-2 py-1 bg-indigo-500 text-white rounded';
  submit.textContent = 'Submit';
  form.appendChild(submit);

  const feedback = document.createElement('div');
  feedback.className = 'mt-2 text-sm';
  wrapper.appendChild(form);
  wrapper.appendChild(feedback);

  // Show previous answer/feedback if question was already attempted
  if (progress[question.id] && progress[question.id].attempted) {
      if (question.type === 'multipleChoice') {
        feedback.textContent = progress[question.id].correct ? 'Correct' : `Incorrect. Answer: ${question.answer}`;
      } else if (question.modelAnswer) {
        feedback.textContent = `Previously submitted. Model Answer: ${question.modelAnswer}`;
      }
       // Disable form if already attempted
      Array.from(form.elements).forEach(el => el.disabled = true);
  }


  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.elements[0] && form.elements[0].disabled) return; // Already submitted

    if (question.type === 'shortAnswer' || question.type === 'extendedResponse') {
      const textArea = form.querySelector(`textarea[name="${question.id}"]`);
      if (!textArea || !textArea.value.trim()) {
        feedback.textContent = 'Please enter an answer.';
        return;
      }
      feedback.textContent = `Model Answer: ${question.modelAnswer}`;
      // Mark as attempted, but no correctness for SAQ/ERQ yet
      const currentProgress = getStoredProgress();
      currentProgress[question.id] = { attempted: true, timestamp: Date.now() };
      saveProgress(currentProgress);
      Array.from(form.elements).forEach(el => el.disabled = true); // Disable after submit
      // No automatic next question for SAQ/ERQ for now
    } else { // Multiple-choice logic
      const chosen = form.querySelector('input:checked');
      if (!chosen) {
        feedback.textContent = 'Please select an answer.';
        return;
      }
      const correct = chosen.value === question.answer;
      recordQuestionResult(skillIdToRender, question.id, correct); // Pass skillId
      feedback.textContent = correct ? 'Correct' : `Incorrect. Answer: ${question.answer}`;
      Array.from(form.elements).forEach(el => el.disabled = true); // Disable after submit

      // Add a "Next Question" button for MCQs
      const nextButton = document.createElement('button');
      nextButton.textContent = 'Next Question';
      nextButton.className = 'mt-2 ml-2 px-2 py-1 bg-green-500 text-white rounded';
      nextButton.onclick = () => {
        renderExamHub('exam-mastery-hub', skillIdToRender); // Re-render for the same skill
      };
      feedback.appendChild(nextButton);
    }
  });

  return wrapper;
}

export function renderExamHub(containerId, skillId = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // For now, let's default to the first skill of the first AOS of Unit 4 if no skillId is provided
  // This needs to be improved for real skill selection.
  let targetSkillId = skillId;
  if (!targetSkillId) {
    const firstUnitKey = Object.keys(examData)[0]; // e.g. unit4
    if (examData[firstUnitKey]) {
        const firstAosKey = Object.keys(examData[firstUnitKey])[0]; // e.g. aos1
        if (examData[firstUnitKey][firstAosKey] && examData[firstUnitKey][firstAosKey].skills && examData[firstUnitKey][firstAosKey].skills.length > 0) {
            targetSkillId = examData[firstUnitKey][firstAosKey].skills[0].id;
        }
    }
  }

  if (!targetSkillId) {
      container.innerHTML = '<p>No skill selected or available.</p>';
      return;
  }

  const skill = getSkillById(targetSkillId);
  if (!skill) {
    container.innerHTML = `<p>Skill with ID ${targetSkillId} not found.</p>`;
    return;
  }

  const progress = getStoredProgress();
  let skillPerformance = progress.skillPerformance && progress.skillPerformance[targetSkillId]
    ? progress.skillPerformance[targetSkillId]
    : { currentDifficulty: 'medium', easyStreak: 0, mediumStreak: 0, hardStreak: 0, easyWrong: 0, mediumWrong: 0, hardWrong: 0, history: [] };

  // If skillPerformance was just initialized and not in progress, ensure it's saved for next time.
  if (!progress.skillPerformance || !progress.skillPerformance[targetSkillId]) {
      if(!progress.skillPerformance) progress.skillPerformance = {};
      progress.skillPerformance[targetSkillId] = skillPerformance;
      // No need to saveProgress here, will be saved by recordQuestionResult or if we display all questions.
  }

  container.innerHTML = ''; // Clear previous content

  // Display Skill Title
  const skillTitle = document.createElement('h3');
  skillTitle.textContent = skill.name;
  skillTitle.className = 'text-xl font-semibold mb-3';
  container.appendChild(skillTitle);

  // Display adaptive question
  const nextQuestion = getNextQuestionAdaptive(skill, progress, skillPerformance);

  if (nextQuestion) {
    container.appendChild(createQuestionElement(nextQuestion, progress, targetSkillId));
  } else {
    // Handle case where all MCQs in the skill are attempted
    const summary = document.createElement('p');
    summary.textContent = 'All multiple-choice questions in this skill have been attempted. Reset progress to try again or select another skill.';
    container.appendChild(summary);
    // Optionally, display all SAQ/ERQ questions for review if any exist
    const nonMcqQuestions = skill.questions.filter(q => q.type !== 'multipleChoice');
    if(nonMcqQuestions.length > 0) {
        const reviewTitle = document.createElement('h4');
        reviewTitle.textContent = "Review Other Questions in this Skill:";
        reviewTitle.className = "text-lg font-medium mt-4 mb-2";
        container.appendChild(reviewTitle);
        nonMcqQuestions.forEach(q => {
            container.appendChild(createQuestionElement(q, progress, targetSkillId));
        });
    }
  }

  // Display current adaptive difficulty (for debugging/visibility)
  const difficultyDisplay = document.createElement('p');
  difficultyDisplay.textContent = `Current Adaptive Difficulty for this skill: ${skillPerformance.currentDifficulty}`;
  difficultyDisplay.className = 'text-xs text-slate-500 mt-4';
  container.appendChild(difficultyDisplay);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Example: Render the first skill of unit4, aos1 by default.
  // In a real app, skillId would come from user navigation.
  let initialSkillId = null;
  const firstUnitKey = Object.keys(examData)[0];
    if (examData[firstUnitKey]) {
        const firstAosKey = Object.keys(examData[firstUnitKey])[0];
        if (examData[firstUnitKey][firstAosKey] && examData[firstUnitKey][firstAosKey].skills && examData[firstUnitKey][firstAosKey].skills.length > 0) {
            initialSkillId = examData[firstUnitKey][firstAosKey].skills[0].id; // Default to first skill
        }
    }
  renderExamHub('exam-mastery-hub', initialSkillId);
});
