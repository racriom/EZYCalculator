var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonDelit = document.getElementById("buttonDelit");
var buttonUmnojat = document.getElementById("buttonUmnojat");
var errase = document.getElementById("erase")

function onButtonPlusClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")

    var number1 = input1.value;
    var number2 = input2.value;

    var summ = Number(number1) + Number(number2)
    window.alert(summ)
}

function onButtonButtonMinusClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")

    var number1 = input1.value;
    var number2 = input2.value;

    var del = Number(number1) - Number(number2)
    window.alert(del)
}

function onButtonUmnojatClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")

    var number1 = input1.value;
    var number2 = input2.value;

    var mnog = Number(number1) * Number(number2)
    window.alert(mnog)
}

function onButtonDelitClik() {
    var input1 = document.getElementById("number1")
    var input2 = document.getElementById("number2")

    var number1 = input1.value;
    var number2 = input2.value;

    var podel = Number(number1) / Number(number2)
    window.alert(podel)
}

function errrase() {
    document.getElementById("number1")
    document.getElementById("number2")
    number1.value = ""
    number2.value = ""
}




buttonPlus.addEventListener("click", onButtonPlusClik)
buttonMinus.addEventListener("click", onButtonButtonMinusClik)
buttonDelit.addEventListener("click", onButtonDelitClik)
buttonUmnojat.addEventListener("click", onButtonUmnojatClik)
errase.addEventListener("click", errrase)
