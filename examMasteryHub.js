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
export function renderExamHub(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '<p class="text-slate-600">Exam Mastery Hub coming soon.</p>';
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderExamHub('exam-mastery-hub');
});
