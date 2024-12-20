document.querySelector("#calculate").addEventListener('click', calculate);

function calculate() {
    const num1 = parseInt(document.querySelector('#number1').value);
    const num2 = parseInt(document.querySelector('#number2').value);
    const operation = document.querySelector('#operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.querySelector('#result').textContent = "Invalid Input";
        return;
    }

    let result;
    switch (operation) {
        case 'AND':
            result = num1 & num2;
            break;
        case 'OR':
            result = num1 | num2;
            break;
        case 'XOR':
            result = num1 ^ num2;
            break;
    }

    document.querySelector('#result').textContent = result;
    document.querySelector('#binaryResult').textContent = `Binary: ${result.toString(2)}`;
}