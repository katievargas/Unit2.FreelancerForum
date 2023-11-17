const state = {
  freelancers: [
    {
      name: 'Alice',
      occupation: 'Writer',
      price: 30,
    },
    {
      name: 'Bob',
      occupation: 'Teacher',
      price: 50,
    },
    {
      name: 'Carol',
      occupation: 'Programmer',
      price: 70,
    }
  ],
}

function updateAveragePrice(){
    let total = 0;

    for (let 1 = 0; i < state.freelancers.length; ++i) {
      const currentFreelancer = state.freelancers[i];

      total +=
    }
}

function updateAverageText() {

}

function addFreelancerRow(freelancer) {
    state.freelancers.push(freelancer)

}

function render() {
    const table = document.getElementById( elementId 'freelancer_table');
}

