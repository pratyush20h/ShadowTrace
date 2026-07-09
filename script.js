const checklistItems = Array.from(document.querySelectorAll('.checklist input'));
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');

function updateProgress() {
  const completed = checklistItems.filter((item) => item.checked).length;
  const total = checklistItems.length;
  const percent = Math.round((completed / total) * 100);
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

checklistItems.forEach((item) => {
  item.addEventListener('change', updateProgress);
});

updateProgress();
