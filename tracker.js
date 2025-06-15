
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
  
  const amount = document.getElementById('amount').value.trim();
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if (!amount || isNaN(amount) || !date) {
    alert('Please enter a valid amount and date.');
    return;
  }

  const expense = {
    id: Date.now(),
    amount: parseFloat(amount),
    category,
    date
  };
