const sizeOptions = document.getElementsByName('size');
const crustOptions = document.getElementsByName('crust');
const toppingOptions = document.getElementsByName('toppings');
const deliveryOption = document.getElementById('delivery');
let totalCost = 0;

const sizeCosts = {
  small: 99,
  medium: 199,
  large: 399
};

const crustCosts = {
  thin: 0,
  deepPan: 20
};

const toppingCosts = {
  mushrooms: 15,
  olives: 10,
  fingernail: 30,
  spicyBeef: 20
};

for (let i = 0; i < sizeOptions.length; i++) {
  sizeOptions[i].addEventListener('change', updateCost);
  sizeOptions[i].addEventListener('click', updateCost);
}

for (let i = 0; i < crustOptions.length; i++) {
  crustOptions[i].addEventListener('change', updateCost);
}

for (let i = 0; i < toppingOptions.length; i++) {
  toppingOptions[i].addEventListener('change', updateCost);
}


deliveryOption.addEventListener('change', updateCost);


function updateCost() {

  totalCost = 0;

  for (let i = 0; i < sizeOptions.length; i++) {
    if (sizeOptions[i].checked) {
      totalCost += sizeCosts[sizeOptions[i].value];
    }
  }

  for (let i = 0; i < crustOptions.length; i++) {
    if (crustOptions[i].checked) {
      totalCost += crustCosts[crustOptions[i].value];
    }
  }

  for (let i = 0; i < toppingOptions.length; i++) {
    if (toppingOptions[i].checked) {
      totalCost += toppingCosts[toppingOptions[i].value];
    }
  }


  if (deliveryOption.checked) {
    totalCost += 25;
  }


  document.getElementById('total-cost').innerHTML = 'Total Cost: ₹' + totalCost;
}

function updateCostOnUncheck() {
  totalCost -= sizeCosts[this.value];
  document.getElementById('total-cost').innerHTML = 'Total Cost: ₹' + totalCost;
}

for (var i = 0; i < sizeOptions.length; i++) {
  sizeOptions[i].addEventListener('change', updateCost);
  sizeOptions[i].addEventListener('click', updateCost);
  sizeOptions[i].addEventListener('mouseup', function() {
    if (!this.checked) {
      updateCostOnUncheck.call(this);
    }
  });
}

