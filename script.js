
document.addEventListener('DOMContentLoaded', () => {
  initBudgetTrackerApp();
});

let expenses = [];

function logWelcomeMessage() {
  const time = new Date().toLocaleTimeString();
  console.log(`✅ Welcome to Budget Tracker! [${time}]`);
}

function displayAppVersion() {
  const version = 'v1.0.0';
  console.log(`🔢 Application Version: ${version}`);
}

function loadExpensesFromStorage() {
  const stored = JSON.parse(localStorage.getItem('expenses'));
  if (stored) {
    expenses = stored;
    expenses.forEach(renderExpense);
  }
}
