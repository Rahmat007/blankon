// mortgage calculator and property management script

function calculateMortgage(principal, annualInterestRate, years) {
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let numberOfPayments = years * 12;
    let monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -numberOfPayments));
    return monthlyPayment;
}

function manageProperty(property) {
    console.log(`Managing property: ${property.name}`);
    // Add more property management functionalities as needed
}

// Example usage:
const principal = 250000; // example principal
const annualInterestRate = 3.75; // example interest rate
const years = 30; // example loan duration

const mortgagePayment = calculateMortgage(principal, annualInterestRate, years);
console.log(`Monthly Mortgage Payment: $${mortgagePayment.toFixed(2)}`);

const property = { name: 'Beautiful House', location: 'Downtown' };
manageProperty(property);

