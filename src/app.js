import store from './data/store.js';
import ProductSet from '../src/product-set.js';

const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');

let turns = 0;

// pulling products from store
const allProducts = store.getProducts();

// creating a new master list by copying the original products from store 
const newProductSet = new ProductSet(allProducts);

// create new array for images to go in when shown on page
let displayed = [];

// get three randomProducts to push into displayed empty array
const randomOne = newProductSet.getRandomProduct();
buttonOne.firstChild.src = randomOne.image;
displayed.push(randomOne);

const randomTwo = newProductSet.getRandomProduct();
buttonTwo.firstChild.src = randomTwo.image;
displayed.push(randomTwo);

const randomThree = newProductSet.getRandomProduct();
buttonThree.firstChild.src = randomThree.image;
displayed.push(randomThree);

// need to make button run 

