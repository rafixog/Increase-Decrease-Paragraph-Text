//Get important selectors and set default value of text size

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

let textSize = 16;

//Functions

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
}

//Adding listeners to activate functions on page

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);