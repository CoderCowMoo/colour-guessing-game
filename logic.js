// return random value between 0 and 255
function randomColour() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// DOMOnLoad
window.onload = function () {
    // get the colourDisplay div
    var colourDisplay = document.getElementById("colourDisplay");
    // give it a random colour
    let correct_colour = rgbToHex(randomColour());
    colourDisplay.style.backgroundColor = correct_colour;

    // loop over colourButton class buttons
    var colourButtons = document.getElementsByClassName("colourButton");
    // random number between 0 and colourButtons.length
    let randomIndex = Math.floor(Math.random() * colourButtons.length);
    for (let i = 0; i < colourButtons.length; i++) {
        // set innertext of button to random colour
        if (i != randomIndex) {
            colourButtons[i].innerText = rgbToHex(randomColour());
        } else {
            colourButtons[i].innerText = correct_colour;
        }
        // add an event listener to each button
        colourButtons[i].addEventListener("click", function () {
            guessed(colourButtons[i].innerText, correct_colour);
        });
    }
}

function guessed(colour_string, correct_colour) {
    if (colour_string == correct_colour) {
        if (document.getElementById("wrong_text") != null) {
            document.getElementById("wrong_text").remove();
        }
        let victory_text = document.createElement("div");
        // set id to be victory_text
        victory_text.id = "victory_text";
        victory_text.innerText = "You win!";
        // colour victory_text green and bold
        victory_text.style.color = "green";
        victory_text.style.fontWeight = "bold";
        document.body.appendChild(victory_text);
        // loop over and disable colourButtons
        var colourButtons = document.getElementsByClassName("colourButton");
        for (let i = 0; i < colourButtons.length; i++) {
            colourButtons[i].disabled = true;
        }
        // set 1 second time delay
        setTimeout(function () {
            document.location.reload();
        }, 1000);

    } else {
        // if wrong_text already exists, remove it
        if (document.getElementById("wrong_text") != null) {
            document.getElementById("wrong_text").remove();
        }
        let wrong_text = document.createElement("div");
        // set id to be wrong_text
        wrong_text.id = "wrong_text";
        wrong_text.innerText = "Wrong!";
        // colour wrong_text red and bold
        wrong_text.style.color = "red";
        wrong_text.style.fontWeight = "bold";
        document.body.appendChild(wrong_text);
    }
}

// function to convert string rgb(r, g, b) into hex colour
function rgbToHex(rgb_string) {
    // split string into array of numbers using regex
    let rgb_array = rgb_string.match(/\d+/g);
    // github copilot will write the following comment very intelligently
    // for an input of rgb(255, 255, 255) it will return #ffffff
    // convert each number to hex
    for (let i = 0; i < rgb_array.length; i++) {
        rgb_array[i] = parseInt(rgb_array[i]).toString(16);
    }
    // join array into string
    return "#" + rgb_array.join("");
}