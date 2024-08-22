// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to remove the last character from the display
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression
function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Replace `%` with `/100` for percentage calculation
    expression = expression.replace(/(\d+)%/g, '($1/100)');

    try {
        // Evaluate the expression and set the result to the display
        display.value = eval(expression);
    } catch (error) {
        // If there is an error, show an error message
        display.value = 'Error';
    }
}
