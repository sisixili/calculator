
function display(val) {
    document.getElementById('result').value += val; // result type is text, so += becomes string concatenation
}

function solve() {
    let expression=document.getElementById('result').value;
    document.getElementById('result').value = eval(expression);
}

function clearScreen() {
    document.getElementById('result').value = '';
}

