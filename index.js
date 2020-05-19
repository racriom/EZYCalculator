var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonDelit = document.getElementById("buttonDelit");
var buttonUmnojat = document.getElementById("buttonUmnojat");
var errase = document.getElementById("erase")


function onButtonPlusClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")
    var input3 = document.getElementById("number3")

    var number1 = input1.value;
    var number2 = input2.value;

    var summ = Number(number1) + Number(number2)
    input3.value = summ;
}

function onButtonButtonMinusClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")
    var input3 = document.getElementById("number3")

    var number1 = input1.value;
    var number2 = input2.value;

    var del = Number(number1) - Number(number2)
    input3.value = del;
}

function onButtonDelitClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")
    var input3 = document.getElementById("number3")

    var number1 = input1.value;
    var number2 = input2.value;

    var mnog = Number(number1) * Number(number2)
    input3.value = mnog;
}

function onButtonUmnojatClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")
    var input3 = document.getElementById("number3")

    var number1 = input1.value;
    var number2 = input2.value;

    var podel = Number(number1) / Number(number2)
    input3.value = podel;
}

function errrase() {
    document.getElementById("number1")
    document.getElementById("number2")
    document.getElementById("number3")
    number1.value = ""
    number2.value = ""
    number3.value = ""
}




buttonPlus.addEventListener("click", onButtonPlusClik)
buttonMinus.addEventListener("click", onButtonButtonMinusClik)
buttonDelit.addEventListener("click", onButtonDelitClik)
buttonUmnojat.addEventListener("click", onButtonUmnojatClik)
errase.addEventListener("click", errrase)
