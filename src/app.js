import store from './data/store.js';
import products from './data/products.js';
import { getRandomInt } from './utility-functions.js';

const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const productButtonsSection = document.getElementById('product-buttons');

let turns = 0;
let live = true;

const products = store.getProducts();
const masterProductSet = new masterProductSet(products);

function handleUserChoice(event) {
    if(!live) return;

    const productButtons = event.target;

    // update the display

    productButtonsSection.classList.add('reveal');
    productButtons.parentNode.classList.add('choice');

    // add a turn
    turns++;

    // need to add tracking

};

submitButton.addEventListener('click', () => {
    if(!masterProductSet.hasProducts()) {
        displayFinalProducts();
        return;
    }

    productButtonsSection.classList.remove('reveal');
    submitButton.classList.add('hidden');
    live = true;
    
})

}