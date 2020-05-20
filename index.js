var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonDelit = document.getElementById("buttonDelit");
var buttonUmnojat = document.getElementById("buttonUmnojat");
var errase = document.getElementById("erase")

var input1 = document.getElementById("number1")
var input2 = document.getElementById("number2")
var input3 = document.getElementById("number3")

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === "+") {
        var summ = number1 + number2
    } else if (operationCode === "-") {
        var summ = number1 - number2
    } else if (operationCode === "/") {
        var summ = number1 / number2
    } else if (operationCode === "*") {
        var summ = number1 * number2
    } else {
        window.alert("Unknown operation")
    }
    input3.value = summ;
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function errrase() {
    document.getElementById("number1")
    document.getElementById("number2")
    document.getElementById("number3")
    number1.value = ""
    number2.value = ""
    number3.value = ""
}

buttonPlus.addEventListener("click", onOperationButtonClick)
buttonMinus.addEventListener("click", onOperationButtonClick)
buttonDelit.addEventListener("click", onOperationButtonClick)
buttonUmnojat.addEventListener("click", onOperationButtonClick)
errase.addEventListener("click", errrase)
