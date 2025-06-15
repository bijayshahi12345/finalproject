
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

function setupEventListeners() {
  const form = document.getElementById('expense-form');
  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
    const amountInput = document.getElementById('amount');
  const categoryInput = document.getElementById('category');
  const dateInput = document.getElementById('date');
  const errorDiv = document.getElementById('form-errors');

  const amount = amountInput.value.trim();
  const category = categoryInput.value.trim();
  const date = dateInput.value.trim();

  if (!amount || isNaN(amount) || !category || !date) {
    showError("Please fill out all fields correctly.");
    return;
  }

  errorDiv.textContent = '';

  const expense = {
    id: Date.now(),
    amount: parseFloat(amount),
    category,
    date
  };
  
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpense(expense);
  e.target.reset();
}
