import { initializeExamSkillsHelper } from "./examSkillsHelper.js";
// examMasteryHub.js - handles rendering and progress tracking for Exam Mastery Hub
import { examData } from './examData.js';

const STORAGE_KEY = 'examHubProgress';
let inMemoryProgress = {};

function getStoredProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : inMemoryProgress;
  } catch (err) {
    console.warn('Local storage unavailable, using in-memory progress.', err);
    return inMemoryProgress;
  }
}

function saveProgress(progress) {
  inMemoryProgress = progress;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Local storage unavailable, progress not persisted.', err);
  }
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

// Helper to get all questions for a skillId (ensure it's available or define it)
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

// Function to initialize/update total counts in skillStats
function initializeOrUpdateSkillStatTotals(skillId, skillStats) {
  const skillData = getSkillById(skillId);
  if (!skillData) {
    console.error(`initializeOrUpdateSkillStatTotals: Skill data not found for skillId ${skillId}`);
    return;
  }

  skillStats.totalQuestionsInSkill = skillData.questions.length;
  skillStats.performanceByDifficulty = {
    easy: { totalMcq: 0, attemptedMcq: 0, correctMcq: 0 },
    medium: { totalMcq: 0, attemptedMcq: 0, correctMcq: 0 },
    hard: { totalMcq: 0, attemptedMcq: 0, correctMcq: 0 }
  };

  skillData.questions.forEach(q => {
    if (q.type === 'multipleChoice' && q.difficulty) {
      if (skillStats.performanceByDifficulty[q.difficulty]) {
        skillStats.performanceByDifficulty[q.difficulty].totalMcq++;
      } else {
        //This case should ideally not happen if difficulties are well-defined
        console.warn(`Question ${q.id} has unknown difficulty: ${q.difficulty}`);
      }
    }
  });
}

// Function to calculate statistics for a skill
function calculateSkillStatistics(skillId, allUserProgress) {
  const skillData = getSkillById(skillId);
  if (!skillData) {
    console.error(`calculateSkillStatistics: Skill data not found for skillId ${skillId}`);
    return null;
  }

  // Ensure skillPerformance structure exists for the skill if not already there by recordQuestionResult
  // This is more for direct calculation calls rather than post-recordQuestionResult calls
  if (!allUserProgress.skillPerformance) allUserProgress.skillPerformance = {};
  if (!allUserProgress.skillPerformance[skillId]) {
      allUserProgress.skillPerformance[skillId] = {
          currentDifficulty: 'medium', easyStreak: 0, mediumStreak: 0, hardStreak: 0,
          easyWrong: 0, mediumWrong: 0, hardWrong: 0, history: []
      };
  }

  let skillStats = (allUserProgress.skillStats && allUserProgress.skillStats[skillId])
                    ? JSON.parse(JSON.stringify(allUserProgress.skillStats[skillId])) // Deep copy to avoid modifying stale data
                    : {};

  // Initialize totals if they are not set or seem invalid (e.g. 0)
  if (!skillStats.totalQuestionsInSkill || !skillStats.performanceByDifficulty) {
    initializeOrUpdateSkillStatTotals(skillId, skillStats);
  }

  // Reset calculated fields to ensure fresh calculation
  skillStats.attemptedQuestions = 0;
  skillStats.correctQuestions = 0; // Specifically for MCQs
  skillStats.performanceByDifficulty.easy.attemptedMcq = 0;
  skillStats.performanceByDifficulty.easy.correctMcq = 0;
  skillStats.performanceByDifficulty.medium.attemptedMcq = 0;
  skillStats.performanceByDifficulty.medium.correctMcq = 0;
  skillStats.performanceByDifficulty.hard.attemptedMcq = 0;
  skillStats.performanceByDifficulty.hard.correctMcq = 0;
  let latestTimestamp = skillStats.lastAttemptTimestamp || 0;

  skillData.questions.forEach(question => {
    const questionProgress = allUserProgress[question.id]; // Attempt data stored by questionId
    if (questionProgress && questionProgress.attempted) {
      skillStats.attemptedQuestions++;
      if (questionProgress.timestamp > latestTimestamp) {
        latestTimestamp = questionProgress.timestamp;
      }

      if (question.type === 'multipleChoice') {
        if (question.difficulty && skillStats.performanceByDifficulty[question.difficulty]) {
           skillStats.performanceByDifficulty[question.difficulty].attemptedMcq++;
            if (questionProgress.correct === true) {
              skillStats.correctQuestions++; // Counting correct MCQs
              skillStats.performanceByDifficulty[question.difficulty].correctMcq++;
            }
        } else {
            console.warn(`MCQ ${question.id} has no difficulty or invalid difficulty: ${question.difficulty}`);
        }
      }
    }
  });
  skillStats.lastAttemptTimestamp = latestTimestamp > 0 ? latestTimestamp : null;
  return skillStats;
}


export function recordQuestionResult(skillIdFromContext, questionId, correct) {
  const progress = getStoredProgress();

  // Record individual question result
  progress[questionId] = { correct, timestamp: Date.now(), attempted: true };

  const questionDetails = getQuestionDetails(questionId);
  if (!questionDetails || questionDetails.skillId !== skillIdFromContext) {
    console.error("Skill ID mismatch or question details not found for adaptive logic.", skillIdFromContext, questionId);
    // Still save basic progress for the question itself
    saveProgress(progress);
    return;
  }

  const skillId = questionDetails.skillId;
  const difficulty = questionDetails.difficulty;

  if (!progress.skillPerformance) {
    progress.skillPerformance = {};
  }
  if (!progress.skillPerformance[skillId]) {
    progress.skillPerformance[skillId] = {
      currentDifficulty: 'medium',
      easyStreak: 0, mediumStreak: 0, hardStreak: 0,
      easyWrong: 0, mediumWrong: 0, hardWrong: 0,
      history: []
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
    }
  } else {
    perf.history.push({ qId: questionId, difficulty, result: 'incorrect' });
    if (difficulty === 'easy') {
      perf.easyWrong++;
      perf.easyStreak = 0;
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

  // After updating adaptive logic, recalculate and store skill statistics
  const updatedStats = calculateSkillStatistics(skillId, progress);
  if (!progress.skillStats) {
    progress.skillStats = {};
  }
  progress.skillStats[skillId] = updatedStats;

  saveProgress(progress);
}


// New helper function for adaptive question selection
function getNextQuestionAdaptive(skill, progress, skillPerformance) {
  if (!skill || !skill.questions) return null;

  // Ensure progress is an object and filter out non-attempted question progress records.
  const attemptedQuestionIds = new Set();
  if (typeof progress === 'object' && progress !== null) {
    Object.keys(progress).forEach(qid => {
      if (progress[qid] && progress[qid].attempted) {
        attemptedQuestionIds.add(qid);
      }
    });
  }

  const availableQuestions = skill.questions.filter(q => q.type === 'multipleChoice' && !attemptedQuestionIds.has(q.id));

  if (availableQuestions.length === 0) return null;

  const difficultiesToTry = [skillPerformance.currentDifficulty, 'easy', 'medium', 'hard'];

  for (const difficulty of difficultiesToTry) {
    const questionInDifficulty = availableQuestions.find(q => q.difficulty === difficulty);
    if (questionInDifficulty) return questionInDifficulty;
  }

  return availableQuestions.length > 0 ? availableQuestions[0] : null;
}


function createQuestionElement(question, progress, skillIdToRender) {
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
  initializeExamSkillsHelper();

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

  // After rendering question or summary, display/update the overall statistics
  displayExamHubStatistics();
}

const AI_STUDY_RECOMMENDATION_PROMPT = `You are an AI VCE Legal Studies tutor. Your goal is to provide personalized, encouraging, and actionable study recommendations to a student based on their performance data from an interactive study hub. The data primarily reflects Multiple Choice Question (MCQ) performance for correctness and adaptive difficulty progression, but also includes overall attempt rates for all question types within a skill.

Here is the student's performance data:
{{PERFORMANCE_DATA_JSON}}

Based on this data, please provide 2-4 key study recommendations. Follow these guidelines:

1.  **Tone:** Be encouraging, supportive, and constructive.
2.  **Focus:**
    *   Prioritize recommendations by focusing on areas with the most significant room for improvement, especially where MCQ performance data (overall correctness or by difficulty level 'easy', 'medium', 'hard') indicates weakness. Also consider skills with low overall attempt rates.
    *   Pay attention to the \`currentDifficulty\` from the \`skillPerformance\` section for MCQs. If a student is stuck on 'easy' or regressed to 'easy', suggest foundational review for that skill. If they are on 'hard' but \`hardWrong\` is high, suggest focusing on precision for complex questions.
3.  **Specific Recommendations:**
    *   Use actionable verbs (e.g., "Focus on reviewing...", "Practice attempting...", "Consider revisiting...").
    *   If a skill is weak, suggest reviewing its specific objectives (listed in the \`skillData\`).
    *   Frame areas for improvement positively (e.g., "This skill presents a good opportunity for growth: focus on..." or "To strengthen your understanding of [Skill Name], try...").
4.  **Handling MCQ, SAQ, ERQ:**
    *   While correctness data is mainly for MCQs, remember that overall skill mastery involves SAQs and ERQs.
    *   When recommending improvement in a skill based on MCQ data, also encourage practice of related short-answer and extended-response questions for that skill to build comprehensive understanding and application skills, as MCQ data is only one part of overall mastery.
5.  **Edge Cases:**
    *   **Sparse Data:** If performance data for a skill is sparse (e.g., very few questions attempted, or few MCQs attempted within a difficulty level), acknowledge this. Recommend attempting more questions in that skill (especially a mix of MCQ difficulties) to get a clearer performance picture before giving highly specific advice for that skill. You can still suggest a general review of the skill's objectives.
    *   **Consistently High Performance:** If overall MCQ performance is consistently high (e.g., >80-85% correct, especially in medium/hard difficulties) and attempt rates are good, congratulate the student. Suggest deepening their understanding by:
        *   Tackling more complex extended response and short answer questions within those strong skills.
        *   Challenging themselves with any remaining 'hard' MCQs.
        *   Exploring conceptual links between this skill and other related topics.
        *   Briefly reviewing the skill objectives to consolidate understanding.
6.  **Format:**
    *   Start with a brief, encouraging opening statement.
    *   Present recommendations as a bulleted list.
    *   Keep each recommendation clear and concise.

Provide your recommendations below:
`;

// Function to prepare performance data for the AI
function preparePerformanceDataForAI() {
  const progress = getStoredProgress();
  if (!progress.skillStats && !progress.skillPerformance) {
    return null; // No data to process
  }

  const aiData = [];
  // Iterate through all skills defined in examData to ensure all are considered
   for (const unitKey in examData) {
    if (examData[unitKey]) {
      for (const aosKey in examData[unitKey]) {
        const aos = examData[unitKey][aosKey];
        if (aos.skills && Array.isArray(aos.skills)) {
          aos.skills.forEach(skill => {
            const skillId = skill.id;
            const stats = progress.skillStats ? progress.skillStats[skillId] : null;
            const performance = progress.skillPerformance ? progress.skillPerformance[skillId] : null;

            if (stats || performance) { // Only include if there's some data
              const skillSummary = {
                skillId: skill.id,
                skillName: skill.name,
                objectives: skill.objectives,
                totalQuestionsInSkill: stats ? stats.totalQuestionsInSkill : 0,
                attemptedQuestions: stats ? stats.attemptedQuestions : 0,
                mcqCorrect: stats ? stats.correctQuestions : 0, // correctQuestions in skillStats is for MCQs
                mcqAttemptedByDifficulty: {
                  easy:   stats && stats.performanceByDifficulty && stats.performanceByDifficulty.easy   ? { correct: stats.performanceByDifficulty.easy.correctMcq, attempted: stats.performanceByDifficulty.easy.attemptedMcq, total: stats.performanceByDifficulty.easy.totalMcq } : { correct: 0, attempted: 0, total: 0 },
                  medium: stats && stats.performanceByDifficulty && stats.performanceByDifficulty.medium ? { correct: stats.performanceByDifficulty.medium.correctMcq, attempted: stats.performanceByDifficulty.medium.attemptedMcq, total: stats.performanceByDifficulty.medium.totalMcq } : { correct: 0, attempted: 0, total: 0 },
                  hard:   stats && stats.performanceByDifficulty && stats.performanceByDifficulty.hard   ? { correct: stats.performanceByDifficulty.hard.correctMcq, attempted: stats.performanceByDifficulty.hard.attemptedMcq, total: stats.performanceByDifficulty.hard.totalMcq } : { correct: 0, attempted: 0, total: 0 }
                },
                currentAdaptiveMcqDifficulty: performance ? performance.currentDifficulty : 'medium', // Default if no performance data yet
                adaptiveMcqHistorySummary: performance ? `Streaks (E/M/H): ${performance.easyStreak}/${performance.mediumStreak}/${performance.hardStreak}. Wrongs (E/M/H): ${performance.easyWrong}/${performance.mediumWrong}/${performance.hardWrong}` : "No adaptive MCQ data yet."
              };
              // Calculate total attempted MCQs for the skill summary
              skillSummary.mcqTotalAttempted = Object.values(skillSummary.mcqAttemptedByDifficulty).reduce((sum, diff) => sum + diff.attempted, 0);
              aiData.push(skillSummary);
            }
          });
        }
      }
    }
  }
  return aiData.length > 0 ? aiData : null;
}


// Function to generate HTML for a single skill's statistics
function renderSkillStatistics(skillId, skillStats, skillData) {
  const skillStatCard = document.createElement('div');
  skillStatCard.className = 'skill-stat-card p-4 border border-slate-200 rounded-md bg-white';

  let totalAttemptedMCQsInSkill = 0;
  if (skillStats.performanceByDifficulty) {
    totalAttemptedMCQsInSkill = Object.values(skillStats.performanceByDifficulty)
                                      .reduce((sum, diffStats) => sum + diffStats.attemptedMcq, 0);
  }

  let overallMcqPercentage = 0;
  if (totalAttemptedMCQsInSkill > 0) {
    overallMcqPercentage = Math.round((skillStats.correctQuestions / totalAttemptedMCQsInSkill) * 100);
  }

  let overallMcqPerformanceColor = 'text-slate-700';
  if (totalAttemptedMCQsInSkill > 0) {
    if (overallMcqPercentage >= 70) overallMcqPerformanceColor = 'text-green-600 font-semibold';
    else if (overallMcqPercentage >= 40) overallMcqPerformanceColor = 'text-yellow-600 font-semibold';
    else overallMcqPerformanceColor = 'text-red-600 font-semibold';
  }

  let content = `
    <h4 class="text-lg font-medium text-slate-800">${skillData.name}</h4>
    <p class="text-sm text-slate-600">Overall Progress: ${skillStats.attemptedQuestions} / ${skillStats.totalQuestionsInSkill} questions attempted.</p>
    <p class="text-sm text-slate-600">MCQ Performance:
      <span class="${overallMcqPerformanceColor}">${skillStats.correctQuestions} / ${totalAttemptedMCQsInSkill} correct</span>
      ${totalAttemptedMCQsInSkill > 0 ? `(${overallMcqPercentage}%)` : ''}
    </p>
  `;

  if (skillStats.performanceByDifficulty) {
    content += `<div class="mt-3 space-y-2">
                  <h5 class="text-sm font-semibold text-slate-700">MCQ Difficulty Breakdown:</h5>`;
    ['easy', 'medium', 'hard'].forEach(difficulty => {
      const diffStats = skillStats.performanceByDifficulty[difficulty];
      if (diffStats && diffStats.totalMcq > 0) { // Only display if there are MCQs of this difficulty
        const attempted = diffStats.attemptedMcq;
        const correct = diffStats.correctMcq;
        const totalMcqAtThisDifficulty = diffStats.totalMcq;
        const percentage = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

        let textColor = 'text-slate-700';
        let bgColor = 'bg-slate-400'; // Default for progress bar if 0 attempted
        if (attempted > 0) {
            if (percentage >= 70) { textColor = 'text-green-600'; bgColor = 'bg-green-500'; }
            else if (percentage >= 40) { textColor = 'text-yellow-600'; bgColor = 'bg-yellow-500'; }
            else { textColor = 'text-red-600'; bgColor = 'bg-red-500'; }
        }

        content += `
          <div class="difficulty-stat text-xs">
            <div class="flex justify-between items-center">
              <span class="capitalize font-medium text-slate-600">${difficulty}</span>
              <span class="${textColor}">${correct} / ${attempted} correct ${attempted > 0 ? `(${percentage}%)` : ''}</span>
            </div>
            <div class="flex justify-between items-center text-slate-500">
              <span>(Total MCQs: ${totalMcqAtThisDifficulty})</span>
              <span>Attempted: ${attempted}/${totalMcqAtThisDifficulty}</span>
            </div>
            <div class="w-full bg-slate-200 rounded h-2 mt-1">
              <div class="${bgColor} h-2 rounded" style="width: ${attempted > 0 ? (attempted / totalMcqAtThisDifficulty * 100) : 0}%"></div>
            </div>
          </div>
        `;
      }
    });
    content += `</div>`;
  }
  if(skillStats.lastAttemptTimestamp) {
    content += `<p class="text-xs text-slate-400 mt-2">Last attempt: ${new Date(skillStats.lastAttemptTimestamp).toLocaleString()}</p>`;
  }

  skillStatCard.innerHTML = content;
  return skillStatCard;
}

// Function to display statistics for all skills
export function displayExamHubStatistics() {
  const statsContainer = document.getElementById('stats-per-skill-details');
  if (!statsContainer) {
    console.warn('Stats container "stats-per-skill-details" not found in HTML.');
    return;
  }
  statsContainer.innerHTML = ''; // Clear previous stats

  const progress = getStoredProgress();
  if (!progress || !progress.skillStats) {
    statsContainer.innerHTML = '<p class="text-sm text-slate-500">No skill statistics available yet. Attempt some questions!</p>';
    return;
  }

  let hasStats = false;
  // Iterate through all skills defined in examData to maintain order and completeness
  for (const unitKey in examData) {
    if (examData[unitKey]) {
      for (const aosKey in examData[unitKey]) {
        const aos = examData[unitKey][aosKey];
        if (aos.skills && Array.isArray(aos.skills)) {
          aos.skills.forEach(skillData => {
            const skillId = skillData.id;
            const skillStats = progress.skillStats[skillId];

            if (skillStats) { // Check if stats exist for this skill
              // Ensure totals are initialized if they weren't before (e.g. if stats were calculated by an older version)
              if (!skillStats.totalQuestionsInSkill || !skillStats.performanceByDifficulty || skillStats.performanceByDifficulty.easy.totalMcq === undefined) {
                 initializeOrUpdateSkillStatTotals(skillId, skillStats);
                 // If we had to initialize, the actual attempt/correct counts might be missing or also need recalc.
                 // For simplicity here, we assume calculateSkillStatistics is robust enough or called recently.
                 // A more robust approach would be to always recalculate if totals were missing.
                 const recalculatedStats = calculateSkillStatistics(skillId, progress);
                 if(recalculatedStats) progress.skillStats[skillId] = recalculatedStats; // update progress object
              }

              const skillStatElement = renderSkillStatistics(skillId, progress.skillStats[skillId], skillData);
              statsContainer.appendChild(skillStatElement);
              hasStats = true;
            } else {
              // Optionally display a placeholder for skills with no stats yet
              const noStatCard = document.createElement('div');
              noStatCard.className = 'p-4 border border-slate-200 rounded-md bg-white';
              noStatCard.innerHTML = `<h4 class="text-lg font-medium text-slate-700">${skillData.name}</h4><p class="text-sm text-slate-500">No progress yet for this skill.</p>`;
              statsContainer.appendChild(noStatCard);
            }
          });
        }
      }
    }
  }
   if (!hasStats && Object.keys(progress.skillStats).length === 0) { // Check if skillStats is empty
        statsContainer.innerHTML = '<p class="text-sm text-slate-500">No skill statistics available yet. Attempt some questions!</p>';
    }
}


// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  // Example: Render the first skill of unit4, aos1 by default.
  // In a real app, skillId would come from user navigation.
  let initialSkillId = null;
  const firstUnitKey = Object.keys(examData)[0]; // Should be 'unit4'
    if (examData[firstUnitKey]) {
        const firstAosKey = Object.keys(examData[firstUnitKey])[0]; // Should be 'aos1'
        if (examData[firstUnitKey][firstAosKey] && examData[firstUnitKey][firstAosKey].skills && examData[firstUnitKey][firstAosKey].skills.length > 0) {
            initialSkillId = examData[firstUnitKey][firstAosKey].skills[0].id;
        }
    }
  renderExamHub('exam-mastery-hub', initialSkillId); // Render initial skill view

  // AI Recommendations Button Event Listener
  const getAiRecsBtn = document.getElementById('get-ai-recommendations-btn');
  const aiRecsLoading = document.getElementById('ai-recs-loading');
  const aiRecsOutput = document.getElementById('ai-recommendations-output');
  const aiRecsError = document.getElementById('ai-recs-error');

  if (getAiRecsBtn) {
    getAiRecsBtn.addEventListener('click', async () => {
      if (!aiRecsLoading || !aiRecsOutput || !aiRecsError) {
        console.error("AI Recommendations UI elements not found.");
        return;
      }

      aiRecsLoading.classList.remove('hidden');
      aiRecsError.classList.add('hidden');
      aiRecsOutput.innerHTML = '';
      getAiRecsBtn.disabled = true;

      const performanceData = preparePerformanceDataForAI();

      if (!performanceData || performanceData.length === 0 || performanceData.every(skill => skill.attemptedQuestions === 0)) {
        aiRecsOutput.innerHTML = '<p class="text-sm text-slate-600">Please attempt more questions across various skills to get personalized recommendations.</p>';
        aiRecsLoading.classList.add('hidden');
        getAiRecsBtn.disabled = false;
        return;
      }

      const jsonDataString = JSON.stringify(performanceData, null, 2); // Pretty print for readability if needed, but not essential for API
      const constructedPrompt = AI_STUDY_RECOMMENDATION_PROMPT.replace('{{PERFORMANCE_DATA_JSON}}', jsonDataString);

      console.log("Attempting to call Gemini API for recommendations...");
      try {
        if (typeof window.callGeminiAPI !== 'function') {
            throw new Error("callGeminiAPI function is not available globally. Make sure it's exposed from keySkillsHub.js");
        }
        const recommendationsText = await window.callGeminiAPI(constructedPrompt);

        // Basic Markdown to HTML conversion (for bullet points)
        let htmlOutput = recommendationsText
            .replace(/^\s*[\*-]\s/gm, '<li>') // Convert lines starting with * or - to <li>
            .replace(/^(?!<li>)(.+)$/gm, '<p>$1</p>') // Wrap non-list lines in <p>
            .replace(/<\/li>\s*<p>/g, '</li></ul><p>') // Close ul before new paragraph if needed
            .replace(/<p>\s*<li>/g, '<p></p><ul><li>') // Start ul if list starts after a paragraph
            .replace(/\n/g, '<br>');

        // Ensure any list is wrapped in <ul>
        if (htmlOutput.includes('<li>') && !htmlOutput.startsWith('<ul>')) {
            htmlOutput = '<ul>' + htmlOutput;
        }
        if (htmlOutput.includes('<li>') && !htmlOutput.endsWith('</ul>')) {
            // Find the last </li> and insert </ul> after it. This is a bit crude.
            const lastLi = htmlOutput.lastIndexOf('</li>');
            if (lastLi !== -1) {
                htmlOutput = htmlOutput.substring(0, lastLi + 5) + '</ul>' + htmlOutput.substring(lastLi + 5);
            } else { // if somehow only <li> opening tags exist
                 htmlOutput += '</ul>';
            }
        }
         // Remove empty paragraphs that might result from multiple newlines
        htmlOutput = htmlOutput.replace(/<p><br><\/p>/g, '').replace(/<p><\/p>/g, '');


        aiRecsOutput.innerHTML = htmlOutput;

      } catch (error) {
        console.error("Error getting AI recommendations:", error);
        aiRecsError.textContent = `Failed to get recommendations. ${error.message}. Please check the console.`;
        aiRecsError.classList.remove('hidden');
      } finally {
        aiRecsLoading.classList.add('hidden');
        getAiRecsBtn.disabled = false;
      }
    });
  } else {
    console.warn("AI Recommendations button not found.");
  }


});
