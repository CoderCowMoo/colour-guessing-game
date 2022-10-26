// return random value between 0 and 255
function randomColour() {
    return Math.floor(Math.random() * 256);
}

// DOMOnLoad
window.onload = function () {
    // get the colourDisplay div
    var colourDisplay = document.getElementById("colourDisplay");
    // give it a random colour
    colourDisplay.style.backgroundColor = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;

    // get the 