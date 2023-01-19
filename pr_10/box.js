
//prompt
function Accumulator(startingValue) {
    this.value = Number(startingValue);
}

let box = new Accumulator(prompt('Введите начальное значение: '));
var items = document.getElementById('items');
items.innerHTML = 'Items: ' + box.value;


function read() {
    box.value += Number(prompt('Сколько предметов нужно положить: '));
    items.innerHTML = 'Items: ' + box.value;
}

//input
var input_items = document.getElementById('box_input');
input_items.onkeydown = input_items.onkeyup = checkValue;

function checkValue() {
    if (Number(input_items.value) > 0) activateButton()
    else deactivateButton()
}

put_in_button = document.getElementById('put_in_button')

function activateButton() {
    put_in_button.disabled = false;
    put_in_button.classList.add("enabled");
}

function deactivateButton() {
    put_in_button.disabled = true;
    put_in_button.classList.remove("enabled");
}

function put_in() {
    box.value += Number(input_items.value);
    items.innerHTML = 'Items: ' + box.value;
    input_items.value = null;
    deactivateButton()
}