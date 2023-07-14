const form = document.getElementById("form");
const tempInput = document.getElementById("tempInput");
const resultDiv = document.getElementById("result");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    let outputString = ""; //define output string
    const inputString = tempInput.value; //define input string
    for (let i = 0; i < inputString.length; i++) {
        if ( i % 2 === 0) outputString += inputString[i].toLowerCase(); //if at even index, lowercase the character
        else outputString += inputString[i].toUpperCase(); //if at odd index, uppercase the character
        console.log(`i = ${i}, character changed = ${inputString[i]}, output = ${outputString}`); //output test to log for readability
    }
    resultDiv.innerHTML = outputString;
    console.log(outputString);
});