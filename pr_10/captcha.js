a = null;
b = null;

var put_in_button = document.getElementById("submit_button");
var result = document.getElementById('captcha_input');
result.addEventListener("keydown", checkCaptcha, false);

function generateCaptcha() {
    var textarea = document.getElementById('captcha');
    a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    textarea.innerHTML = a + " + " + b;
}

function checkCaptcha(event) {
    if (event.keyCode == 13) {

        if (result.value == a + b) {
            activateButton();
        } else {
            deactivateButton();
            generateCaptcha();
        }

        event.preventDefault();
    }
}

function activateButton() {
    put_in_button.disabled = false;
    put_in_button.classList.add("enabled");
}

function deactivateButton() {
    put_in_button.disabled = true;
    put_in_button.classList.remove("enabled");
}

generateCaptcha();
