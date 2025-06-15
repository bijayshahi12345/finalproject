
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
 addExpenseToDOM(expense);
  saveExpenseToStorage(expense);

  e.target.reset();
}

function addExpenseToDOM(expense) {
  const list = document.getElementById('expense-list');
  const li = document.createElement('li');
  li.dataset.id = expense.id;
  li.innerHTML = `
    ₹${expense.amount} - <strong>${expense.category}</strong> on ${expense.date}
    <button class="delete-btn">X</button>
  `;
  li.querySelector('.delete-btn').addEventListener('click', () => removeExpense(expense.id));
  list.appendChild(li);
}
function saveExpenseToStorage(expense) {
  const expenses = getExpensesFromStorage();
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function getExpensesFromStorage() {
  return JSON.parse(localStorage.getItem('expenses')) || [];
}

function loadExpensesFromStorage() {
  const expenses = getExpensesFromStorage();
  expenses.forEach(addExpenseToDOM);
}

function removeExpense(id) {
  const expenses = getExpensesFromStorage().filter(exp => exp.id !== id);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  const li = document.querySelector(`[data-id='${id}']`);
  if (li) li.remove();
}