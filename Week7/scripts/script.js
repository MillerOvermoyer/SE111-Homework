var numberText = document.querySelector("#number")
var incrementButton = document.querySelector("#increment")
var decrementButton = document.querySelector("#decrement")

var currentNumber = 0

//This function will add 1 to the current number and update the text on the page
function addToNumber(){
    currentNumber++
    numberText.innerHTML = currentNumber
}

//This function will subtract 1 from the current number and update the text on the page
function subtractFromNumber(){
    currentNumber--
    numberText.innerHTML = currentNumber
}


//Set up event listeners for the buttons
incrementButton.addEventListener("click", addToNumber)
decrementButton.addEventListener("click", subtractFromNumber)

var givePunchlineButton = document.querySelector("#givePunchline")
var punchlineText = document.querySelector("#punchline")

function givePunchline(){
    punchlineText.innerHTML += "<h4>The ice might crack up!</h4>"
}

givePunchlineButton.addEventListener("click", givePunchline)

var saveTextButton = document.querySelector("#saveTextButton")
var textInput = document.querySelector("#textInput")
var savedTextContainer = document.querySelector("#savedTextContainer")

function saveText(){
    var text = textInput.value
    savedTextContainer.innerHTML += "<p>" + text + "</p>"
    textInput.value = ""
}

saveTextButton.addEventListener("click", saveText)