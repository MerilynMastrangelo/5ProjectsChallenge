// DOM Elements
const nameValue = document.querySelector('#name');
const dateValue = document.querySelector('#date');
const amountValue = document.querySelector('#amount');
const form = document.querySelector('form');

const table = document.querySelector('table');
const row = document.querySelector('#row');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addExpTcker();
    nameValue.value = '';
    nameValue.focus();
    dateValue.value = '';
    amountValue.value = '';
})

const addExpTcker = () => {
    // Remove the first row
    row.remove();
    // Add a new row in every interation
    let addRow = document.createElement('tr');
    // Display it
    addRow.innerHTML = `
            <td>${nameValue.value}</td>
            <td>${dateValue.value}</td>
            <td>£${amountValue.value}</td>
    `;
    // Append the added row in the table
    table.appendChild(addRow);
}