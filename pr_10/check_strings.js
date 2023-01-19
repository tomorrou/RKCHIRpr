let inputs = document.getElementsByTagName('input');
let labels = document.getElementsByTagName('label');

function check_length() {
    for (let i = 0; i < inputs.length; i++) {
        var maxlength = labels[i].innerHTML.substring(11);
        inputs[i].value = truncate(inputs[i].value, maxlength);
    }
}

function truncate(str, maxlength) {
    if (str != null) {
        var length = str.length;
        if (length > maxlength) {
            return str.substring(0, maxlength - 3) + '...';
        } else return str;
    } else return null;
}