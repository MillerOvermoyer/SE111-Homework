var func = prompt("Would you like to to add, multiply, divide, or subtract? (+, -, *, /)")
var input1 = Number(prompt("What is the first number? (The number you are subtracting/dividing from)"))
var input2 = Number(prompt("What is the second number? (The number you are subtracting/dividing by)"))

function addNumbers(num1, num2){
    return num1 + num2;
}
function subtractNumbers(num1, num2){
    return num1 - num2;
}
function multiplyNumbers(num1, num2){
    return num1 * num2;
}
function divideNumbers(num1, num2){
    return num1 / num2;
}



var result;
if(func == "+"){
    result = addNumbers(input1, input2);
    alert( input1 + " + " + input2 + " = " + result);
}
else if(func == "-"){
    result = subtractNumbers(input1, input2);
    alert( input1 + " - " + input2 + " = " + result);
}
else if(func == "*"){
    result = multiplyNumbers(input1, input2);
    alert( input1 + " * " + input2 + " = " + result);
}
else if(func == "/"){
    result = divideNumbers(input1, input2);
    alert( input1 + " / " + input2 + " = " + result);
}

