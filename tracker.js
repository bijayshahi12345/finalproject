
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadExpensesFromStorage();
  setupFormListener();
  
function setupFormListener() {
  const form = document.getElementById('expense-form');
  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();