import store from './data/store.js';
import { findById } from './utility-functions.js';

const products = store.getProducts();

const clicksCtx = document.getElementById('chart').getContext('2d');

const productsLabels = [];
const clicksData = [];

const totalClicks = [];

for(let i = 0; i < totalClicks.length; i++) {
    const totalClick = totalClicks[i];
    const product = findById(products, totalClicks.id);
    productsLabels.push(product.name);
    clicksData.push(totalClick.clicks);
}

const chart = new Chart(clicksCtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: productsLabels,
        datasets: [{
            label: 'Results',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: clicksData
        }]
    },

    // Configuration options go here
    options: {}
});