import store from './data/store.js';
import ProductSet from '../src/product-set.js';

const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const turnCount = document.getElementById('turns');

let turns = 0;

// pulling products from store
const allProducts = store.getProducts();

// creating a new master list by copying the original products from store 
const newProductSet = new ProductSet(allProducts);

// create new array for images to go in when shown on page
let shownImage = [];

// get three randomProducts to push into displayed empty array
// need to make sure they don't show duplicates???

const randomOne = newProductSet.getRandomProduct();
buttonOne.firstChild.src = randomOne.image;
buttonOne.id = randomOne.id;
shownImage.push(randomOne);

const randomTwo = newProductSet.getRandomProduct();
buttonTwo.firstChild.src = randomTwo.image;
buttonTwo.firstChild.id = randomTwo.id;
shownImage.push(randomTwo);

const randomThree = newProductSet.getRandomProduct();
buttonThree.firstChild.src = randomThree.image;
buttonThree.firstChild.id = randomThree.id;
shownImage.push(randomThree);

// need to make buttons functional
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', handleUserChoice);
}

function handleUserChoice() {

// need to take last shown images out of original array 
    const removedSet = new ProductSet(allProducts);
    for(let i = 0; i < shownImage.length; i++) {
        console.log(shownImage[i].id);
        removedSet.removeById(shownImage[i].id);
    }

    console.log(shownImage);
    console.log(removedSet);

// get three randomProducts to push into new array
    const randomOne = removedSet.getRandomProduct();
    buttonOne.firstChild.src = randomOne.image;
    buttonOne.firstChild.id = randomOne.id;


    const randomTwo = removedSet.getRandomProduct();
    buttonTwo.firstChild.src = randomTwo.image;
    buttonTwo.firstChild.id = randomTwo.id;


    const randomThree = removedSet.getRandomProduct();
    buttonThree.firstChild.src = randomThree.image;
    buttonThree.firstChild.id = randomThree.id;

    console.log(randomOne);


// adds a turn
    turns++;
    displayResults();

    function displayResults() {

        if(turns === 25) {
            quizSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
        }
    }
    // checking turns
    turnCount.textContent = turns;
        
// need to track views


// need to track clicks

    
}