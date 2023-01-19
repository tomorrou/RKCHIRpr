var inputIn = document.querySelector('.input_reg');

inputIn.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        if (inputIn.value == "Да") {
            document.querySelector('.output_label').innerHTML = "Круто!";
        } else {
            document.querySelector('.output_label').innerHTML = "Попробуйте еще раз";
        }
    }
})