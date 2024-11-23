// Get elements from DOM
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');

// Array to hold the expenses
let expenses = [];

// Add Expense
addExpenseButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!amount || !category) {
    alert('Please provide valid amount and category.');
    return;
  }

  // Create an expense object
  const expense = {
    id: new Date().getTime(), // Unique ID based on timestamp
    amount: amount,
    category: category,
    description: description,
  };

  // Add expense to array
  expenses.push(expense);

  // Update the UI
  renderExpenses();
  resetForm();
});

// Render expenses
function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach(expense => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${expense.category} - $${expense.amount} ${expense.description ? `(${expense.description})` : ''}</span>
      <button class="remove-btn" onclick="removeExpense(${expense.id})">Remove</button>
    `;
    expenseList.appendChild(listItem);
    total += expense.amount;
  });

  // Update total expenses
  totalAmount.textContent = total.toFixed(2);
}

// Remove an expense
function removeExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  renderExpenses();
}

// Reset the input fields after adding an expense
function resetForm() {
  amountInput.value = '';
  categoryInput.value = '';
  descriptionInput.value = '';
}
