'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendColum = document.querySelector('.append-column');
const removeColum = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendRow.addEventListener('click', () => {
  const createRow = document.createElement('tr');
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    createRow.append(td);
  }
  tbody.appendChild(createRow);
});

removeRow.addEventListener('click', () => {
  tbody.deleteRow(tbody.rows.length - 1);
});

removeColum.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(columnCount - 1);
  }
});

appendColum.addEventListener('click', () => {
  const columnCount = table.rows.length;

  for (let i = 0; i < columnCount; i++) {
    table.rows[i].insertCell(-1);
  }
});
// write code here
