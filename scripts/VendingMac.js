// get references to the HTML elements we need
const stockDisplay = document.getElementById("stock-display");
const statusDisplay = document.getElementById("status");

// create an object to hold the inventory data
const inventory = [
  { id: 1, name: "Four-line notebook", stock: 2 },
  { id: 2, name: "Two-line notebook", stock: 10 },
  { id: 3, name: "HB pencil", stock: 8 },
  { id: 4, name: "Eraser", stock: 3 },
  { id: 5, name: "Drawing Notebook", stock: 2 }
];

// initialize the stock display
let totalStock = 0;
inventory.forEach(item => {
  totalStock += item.stock;
});
stockDisplay.textContent = totalStock;

// function to handle a sale
function sale(id) {
  // get the quantity input element for this item
  const quantityInput = document.getElementById(`quantity-${id}`);

  // get the requested quantity
  const requestedQuantity = parseInt(quantityInput.value);

  // find the item in the inventory
  const item = inventory.find(item => item.id === id);

  // check if we have enough stock
  if (item.stock < requestedQuantity) {
    // not enough stock
    statusDisplay.classList.add("error");
    statusDisplay.textContent = `Sorry, we only have ${item.stock} "${item.name}" left in stock.`;
  } else {
    // enough stock - update the inventory and display a success message
    item.stock -= requestedQuantity;
    totalStock -= requestedQuantity;
    stockDisplay.textContent = totalStock;
    statusDisplay.classList.remove("error");
    statusDisplay.classList.add("success");
    statusDisplay.textContent = `You bought ${requestedQuantity} "${item.name}"!`;
  }
  
  // check if the total stock count is zero
  if (totalStock === 0) {
    alert("Out of Stock");
  }
}
