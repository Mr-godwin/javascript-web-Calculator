// script.js
const userInput = document.getElementById("calculate");
let currentInput = "0";
let shouldReset = false;

function updateDisplay(newValue) {
    if (shouldReset || currentInput === "0" || currentInput === "=") {
        currentInput = newValue;
        shouldReset = false;
    } else {
        currentInput += newValue;
    }
    userInput.textContent = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        userInput.textContent = currentInput;
        shouldReset = true;
    } catch (error) {
        currentInput = "Error";
        userInput.textContent = currentInput;
        shouldReset = true;
    }
}

document.querySelectorAll(".btn, .fbtn").forEach(button => {
    button.addEventListener("click", function () {
        const value = button.textContent;
        if (value === "=") {
            calculate();
        } else {
            updateDisplay(value);
        }
    });
});
