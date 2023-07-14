// pull in Number Comparison form
const formCompare = document.getElementById("form-compare");
const numberOneToCompare = document.getElementById("comparision-number-one");
const numberTwoToCompare = document.getElementById("comparision-number-two");
const resultCompare = document.getElementById("result-compare");

 //pull in Age Guesser form
const formGuesser = document.getElementById("form-age-guess");
const birthYear = document.getElementById("birth-year");
const resultGuess = document.getElementById("result-guess");

//pull in Calculator form
const formCalc = document.getElementById("form-calc");
const numberOneInCalc = document.getElementById("calc-number-one");
const numberTwoInCalc = document.getElementById("calc-number-two");
const operatorInCalc = document.getElementById("calc-operator");
const resultCalcDiv = document.getElementById("result-calc");

//pull in Character Counter
const formCount = document.getElementById("form-count");
const countInputString = document.getElementById("counting-characters");
const resultCountingDiv = document.getElementById("result-counting");

//Number Comparison Form
formCompare.addEventListener("submit",function(e) {
    e.preventDefault();
    const numberOne = parseFloat(numberOneToCompare.value); //convert first value into a double
    const numberTwo = parseFloat(numberTwoToCompare.value); //convert second value into a double
    
    //check value comparison and output
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

//Age Guesser Form
formGuesser.addEventListener("submit",function(e) {
    e.preventDefault();
    let birthYearInput= parseInt(birthYear.value);
    let currentDate = new Date();
    const guessedModifier = Math.floor(Math.random() * 12 / (currentDate.getMonth() + 1)); //guess is the birthday has happened in the year or not
    resultGuess.innerHTML = currentDate.getFullYear() - birthYearInput - guessedModifier; //outputs age guess
});

//Calculator Form
formCalc.addEventListener("submit",function(e) {
    e.preventDefault();
    let oper = operatorInCalc.value;
    let numberOne = parseFloat(numberOneInCalc.value); //converts the first number into a double
    let numberTwo = parseFloat(numberTwoInCalc.value); //converts the second number into a double
    let calcResult = "";

    //switches between different operands
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
    };
    resultCalcDiv.innerHTML = `${numberOne} ${oper} ${numberTwo} = ${calcResult}`; //outputs result
});

//Character Count Form
formCount.addEventListener("submit",function(e) {
    e.preventDefault();
    let inputtedString = countInputString.value 

    //I have two different output lines depending on if the string is a single character or not
    if (inputtedString.length != 1) resultCountingDiv.innerHTML = `${inputtedString} is ${inputtedString.length} characters long.`; 
    else resultCountingDiv.innerHTML = `${inputtedString} is ${inputtedString.length} character long.`
});
