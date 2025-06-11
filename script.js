const options = document.querySelectorAll('input[name="unit"]');

const totalDisplay = document.querySelector('.footer span:last-child');

const prices = {

  unit1: "10.00",

  unit2: "18.00",

  unit3: "24.00"

};

function updateTotal() {

  const selected = document.querySelector('input[name="unit"]:checked');

  if (selected && prices[selected.id]) {

    totalDisplay.textContent = `Total : $${prices[selected.id]} USD`;

  }

}

updateTotal();

options.forEach(option => {

  option.addEventListener('change', updateTotal);

});
