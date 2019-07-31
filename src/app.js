import store from './data/store.js';
import products from './data/products.js';
import ProductSet from '../src/product-set.js';
import { getRandomInt } from './utility-functions.js';

const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const productButtonsSection = document.getElementById('product-buttons');
const submitButton = document.getElementById('submit-button');

let turns = 0;

const allProducts = store.getProducts();
const masterProductSet = new masterProductSet(allProducts);


