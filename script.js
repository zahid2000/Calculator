var numbers = document.querySelector('.numbers');
var sign = document.querySelector('.sign');
var zero = document.querySelector('.zero');
var plus = document.querySelector('.plus');
var equal = document.querySelector('.equal');
var input = document.querySelector('.calc-screen');
var clear = document.querySelector('.clear');


//call event listener
eventListeners();

function eventListeners() {
    numbers.addEventListener('click', addNumbers)
    sign.addEventListener('click', addSign)
    plus.addEventListener('click', addPlus)
    zero.addEventListener('click', addZero)
    clear.addEventListener('click', clearInputValue)
    equal.addEventListener('click', result)

};

//Add numbers to calc screen
function addNumbers(e) {
    if (e.target.className === 'number') {
        input.value = input.value + e.target.textContent;
    }
}

//Add sign to calc screen
function addSign(e) {
    if (input.value != '') {
        if (e.target.className === 'sign-item') {
            input.value = input.value + e.target.textContent;
        }
    }
}

//Add plus
function addPlus(e) {
    if (input.value != '') {
        input.value = input.value + e.target.textContent;
    }

}

//clear input value
function clearInputValue(e) {
    input.value = '';
}

//Add zero toinput value
function addZero(e) {
    input.value += e.target.textContent;
    console.log(e.target.textContent);
}

//result
function result(e) {
    input.value = eval(input.value);
}