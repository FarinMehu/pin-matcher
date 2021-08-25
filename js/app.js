function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    const pinString = pinNumber + '';
    if (pinString.length == 4) {
        return pinNumber;
    }
    else {
        // console.log('got 3 digits and calling again', pinNumber);
        return getPin();
    }
}

function generatePin() {
    // console.log('generating');
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        // calcInput.value = number;
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin() {
    const pinNumber = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-fail');
    if (pinNumber == typedNumbers) {

        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }
    else {

        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}