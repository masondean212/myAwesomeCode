const formCompare = document.getElementById("form-compare");
const numberOneToCompare = document.getElementById("comparision-number-one");
const numberTwoToCompare = document.getElementById("comparision-number-two");
const resultCompare = document.getElementById("result-compare");

const formGuesser = document.getElementById("form-age-guess");
const birthYear = document.getElementById("birth-year");
const resultGuess = document.getElementById("result-guess");

const formCalc = document.getElementById("form-calc");
const numberOneInCalc = document.getElementById("calc-number-one");
const numberTwoInCalc = document.getElementById("calc-number-two");
const operatorInCalc = document.getElementById("calc-operator");
const resultCalcDiv = document.getElementById("result-calc");

const formCount = document.getElementById("form-count");
const countInputString = document.getElementById("counting-characters");
const resultCountingDiv = document.getElementById("result-counting");

formCompare.addEventListener("submit",function(e) {
    e.preventDefault();
    const numberOne = parseFloat(numberOneToCompare.value);
    const numberTwo = parseFloat(numberTwoToCompare.value);
    if (numberOne === numberTwo) {
        resultCompare.innerHTML = "They are the same.";
    }
    else if (numberOne > numberTwo) {
        resultCompare.innerHTML = `${numberOne} is greater than ${numberTwo}`;
    }
    else {
        resultCompare.innerHTML = `${numberOne} is less than ${numberTwo}`;
    }
});

formGuesser.addEventListener("submit",function(e) {
    e.preventDefault();
    let birthYearInput= birthYear.value
    let currentDate = new Date()
    resultGuess.innerHTML = currentDate.getFullYear() - birthYearInput - Math.floor(Math.random() * 12 / (currentDate.getMonth() + 1));
});

formCalc.addEventListener("submit",function(e) {
    e.preventDefault();
    let oper = operatorInCalc.value;
    let numberOne = parseFloat(numberOneInCalc.value)
    let numberTwo = parseFloat(numberTwoInCalc.value)
    let calcResult = ""
    switch(oper) {
    case "+": 
        calcResult = numberOne + numberTwo;
        break;
    case "-": 
        calcResult = numberOne - numberTwo;
        break;
    case "*": 
        calcResult = numberOne * numberTwo;
        break;
    case "/": 
        calcResult = numberOne / numberTwo;
        break;
    case "%": 
        calcResult = numberOne % numberTwo;
        break;
    }
    resultCalcDiv.innerHTML = `${numberOne} ${oper} ${numberTwo} = ${calcResult}`
});


formCount.addEventListener("submit",function(e) {
    e.preventDefault();
    let inputtedString = countInputString.value
    if (inputtedString.length != 1) resultCountingDiv.innerHTML = `${inputtedString} is ${inputtedString.length} characters long.`;
    else resultCountingDiv.innerHTML = `${inputtedString} is ${inputtedString.length} character long.`
});
