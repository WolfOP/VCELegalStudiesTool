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

export function recordQuestionResult(questionId, correct) {
  const progress = getStoredProgress();
  progress[questionId] = { correct, timestamp: Date.now() };
  saveProgress(progress);
}

export function getProgress() {
  return getStoredProgress();
}

// Simple renderer placeholder
function createQuestionElement(question, progress) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mb-4 p-4 border rounded';

  const title = document.createElement('p');
  title.textContent = question.text;
  title.className = 'font-medium mb-2';
  wrapper.appendChild(title);

  const form = document.createElement('form');
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

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'mt-2 px-2 py-1 bg-indigo-500 text-white rounded';
  submit.textContent = 'Submit';
  form.appendChild(submit);

  const feedback = document.createElement('div');
  feedback.className = 'mt-2 text-sm';
  wrapper.appendChild(form);
  wrapper.appendChild(feedback);

  if (progress[question.id]) {
    feedback.textContent = progress[question.id].correct ? 'Correct' : `Incorrect. Answer: ${question.answer}`;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const chosen = form.querySelector('input:checked');
    if (!chosen) return;
    const correct = chosen.value === question.answer;
    recordQuestionResult(question.id, correct);
    feedback.textContent = correct ? 'Correct' : `Incorrect. Answer: ${question.answer}`;
  });

  return wrapper;
}

export function renderExamHub(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const progress = getStoredProgress();
  const questions = examData.unit4.aos1.skills[0].questions;

  container.innerHTML = '';
  const progressSummary = document.createElement('p');
  const attempted = Object.keys(progress).length;
  const correctCount = Object.values(progress).filter(p => p.correct).length;
  progressSummary.className = 'mb-4 text-sm text-slate-600';
  progressSummary.textContent = `Questions attempted: ${attempted} | Correct: ${correctCount}`;
  container.appendChild(progressSummary);

  questions.forEach(q => {
    container.appendChild(createQuestionElement(q, progress));
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderExamHub('exam-mastery-hub');
});
