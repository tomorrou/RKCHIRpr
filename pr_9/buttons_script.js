function liked() {
    var element = document.getElementById("like");
    element.classList.toggle("liked");
}

function draw() {

    var x = null;
    var y = null;
    var drawing_stopped = false;

    document.addEventListener('mousemove', onMouseUpdate);
    document.addEventListener('mousedown', stopDrawing);

    function stopDrawing() {
        drawing_stopped = true;
    }

    function onMouseUpdate(e) {
        if (drawing_stopped) return;

        x = e.pageX;
        y = e.pageY;

        var new_button = document.createElement("button");
        new_button.innerHTML = '&#9733;';
        new_button.className = 'star';
        new_button.style.position = "absolute";
        new_button.style.left = x - 20 + 'px';
        new_button.style.top = y - 40 + 'px';

        document.body.appendChild(new_button);
    }


}