var col1 = document.getElementById("c1");
var col2 = document.getElementById("c2");
var body = document.getElementById("gradient");


function changeColor() {
    body.style.background =
        "linear-gradient(to right, "
        + col1.value
        + ", "
        + col2.value
        + ")";
}
col1.addEventListener("input", changeColor);

col2.addEventListener("input", changeColor);




