const state = {
  freelancers: [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 },
    { name: 'Carol', occupation: 'Programmer', price: 70 },
  ],
};

function updateAveragePrice() {
  let total = 0;

  for (let i = 0; i < state.freelancers.length; ++i) {
    const currentFreelancer = state.freelancers[i];
    total += currentFreelancer.price;
  }

  const averagePrice = total / state.freelancers.length;

  // Assuming you have an HTML element with id 'average_price'
  const averagePriceElement = document.getElementById('average_price');
  averagePriceElement.textContent = `Average Price: $${averagePrice.toFixed(2)}`;
}

function updateAverageText() {
  // Assuming you have an HTML element with id 'average_text'
  const averageTextElement = document.getElementById('average_text');

  if (state.freelancers.length === 0) {
    averageTextElement.textContent = 'No freelancers available.';
  } else {
    averageTextElement.textContent = `There are ${state.freelancers.length} freelancers in the list.`;
  }
}

function addFreelancerRow(freelancer) {
  state.freelancers.push(freelancer);
  render(); // Update the UI after adding a freelancer
}

function render() {
  const table = document.getElementById('freelancer_table');
  table.innerHTML = ''; // Clear the table content

  // Loop through freelancers and create rows
  state.freelancers.forEach((freelancer) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = freelancer.name;
    cell2.textContent = freelancer.occupation;
    cell3.textContent = `$${freelancer.price.toFixed(2)}`;
  });

  updateAveragePrice();
  updateAverageText();
}

document.addEventListener('DOMContentLoaded', () => {
  // Assuming you have an HTML button with id 'add_freelancer_button'
  const addButton = document.getElementById('add_freelancer_button');
  addButton.addEventListener('click', () => {
    const name = prompt('Enter the name of the freelancer:');
    const occupation = prompt('Enter the occupation of the freelancer:');
    const price = parseFloat(prompt('Enter the price:'));
    addFreelancerRow({ name, occupation, price });
  });
});

// Initial rendering
render();
