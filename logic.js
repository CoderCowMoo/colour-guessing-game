// return random value between 0 and 255
function randomColour() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// DOMOnLoad
window.onload = function () {
    // get the colourDisplay div
    var colourDisplay = document.getElementById("colourDisplay");
    // give it a random colour
    let correct_colour = randomColour();
    colourDisplay.style.backgroundColor = correct_colour;

    // loop over colourButton class buttons
    var colourButtons = document.getElementsByClassName("colourButton");
    // random number between 0 and colourButtons.length
    let randomIndex = Math.floor(Math.random() * colourButtons.length);
    for (let i = 0; i < colourButtons.length; i++) {
        // set innertext of button to random colour
        if (i != randomIndex) {
            colourButtons[i].innerText = randomColour();
        } else {
            colourButtons[i].innerText = correct_colour;
        }
        // add an event listener to each button
        colourButtons[i].addEventListener("click", function () {
            guessed(colourButtons[i].innerText);
        });
    }
}
