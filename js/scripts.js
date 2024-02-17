// constants for query selector
const changeCustomColorBtn = document.querySelector('.custColor');
const changeRandomColorBtn = document.querySelector('.randColor');
const userInput = document.querySelector('#customNumber');
const imagePlaceholder = document.querySelector('#images')
const imageSelect = document.querySelector('#imageSelect');

// Creating an array of image paths
let imageArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// Calling the add list function to add options to the select list
addList();

// function to change bg color from user input and add student id
function changeCustomColor() {
    // Adding my student number to the page when the button is clicked
    myStudentId.textContent = 'Student Number - 1220699';

    // Get user input from input field
    let colorNumber = userInput.value;

    // Passing the user input to changeColor function
    changeColor(colorNumber);
}

// function to change bg color from random no.
function changeRandomColor() {
    // Generating a random number between 0 and 100
    let randomNumber =  Math.floor(Math.random() * 101);

    // Passing the random number to changeCustomColor function
    changeColor(randomNumber);
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
        // Note, I called the function at the start so it only gets called once and the list does not keep growing

    // Cycling through the array and adding options to the select list
    for (let i = 0; i < imageArray.length; i++) {
        let option = document.createElement('option');
        imageSelect.appendChild(option);
        option.value = imageArray[i];
        option.textContent = imageArray[i];
    }

}

// function to change image
function changeImage() {
    // Getting the value of the selected image
    let imageSelected = imageSelect.value;

    // Changing the image based on the user selection
    imagePlaceholder.src = imageSelected;;
}

// function to change bg color based on either the user input or a random generated number
function changeColor(colorNumber) {
    if (colorNumber < 0 || colorNumber > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (colorNumber >= 0 && colorNumber <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (colorNumber > 20 && colorNumber <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (colorNumber > 40 && colorNumber <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (colorNumber > 60 && colorNumber <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (colorNumber > 80 && colorNumber <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// event listeners for on click event of buttons and select
changeCustomColorBtn.addEventListener('click', changeCustomColor);
changeRandomColorBtn.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);