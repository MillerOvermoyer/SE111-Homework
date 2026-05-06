var hourlyRate = Number(prompt("What is your hourly rate?"));
var hoursWorked = Number(prompt("How many hours did you work?"));
var taxRate = Number(prompt("What is your tax rate? (As a decimal)"));

function calculatePay(hourlyRate, hoursWorked, taxRate){
    var grossPay = hourlyRate * hoursWorked;

    var netPay = grossPay * (1 - taxRate);
    return netPay;
}

var netPay = calculatePay(hourlyRate, hoursWorked, taxRate);
alert("Your gross pay is: $" + (hourlyRate * hoursWorked).toFixed(2) + "\nYour taxed amount is: $" + (hourlyRate * hoursWorked * taxRate).toFixed(2) + "\nYour net pay is: $" + netPay.toFixed(2));