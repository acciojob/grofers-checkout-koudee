const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all elements with the class 'prices'
  const priceElements = document.querySelectorAll('.prices');
  let totalPrice = 0;

  // Loop through all price elements and add them to totalPrice
  priceElements.forEach(priceElement => {
    // Parse the text content as a float and add to totalPrice
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Check if a total row already exists and remove it if it does
  const existingTotalRow = document.getElementById('total-price-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new table row element
  const newRow = document.createElement('tr');
  newRow.setAttribute('id', 'total-price-row'); // Set an ID to the new row

  // Create a new table cell element for the total price
  const newCell = document.createElement('td');

  // Set the colspan attribute so the cell spans across the table
  newCell.setAttribute('colspan', 2);

  // Set the text content to show the total price
  newCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

  // Append the new cell to the new row
  newRow.appendChild(newCell);

  // Append the new row to the table
  document.getElementById('grocery-table').appendChild(newRow);
};

// Add an event listener to the button
getSumBtn.addEventListener("click", getSum);

