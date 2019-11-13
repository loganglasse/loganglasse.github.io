window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    functionCallsAction = simpleFunction    

function simpleFunction() {
    console.log("functions should consist of statements designed to perform a single task.");
    simpleFunctionDisplay.textContent = "simple";
}

function functionParameters(value) {
    console.log(value);
}

function functionReturn(addResult) {
    return "Many functions return values." + addResult;
}

function add(a, b) {
    const addResult = a + b;
    console.log("inside add", addResult);
    return addResult
}

simpleFunction();

functionParameters("Many functions return values.");

const addResult = add(2, 3);

const returnValue = functionReturn(addResult);

console.log(returnValue);



}