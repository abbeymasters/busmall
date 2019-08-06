import store from './data/store.js';

const userClicks = store.getClicks();
const displayedItems = store.getItemsDisplayed();
const theList = store.getProducts();

const displayedData = [];
const productLabels = [];
const productData = [];

for(let i = 0; i < displayedItems.length; i++) {
    const item = displayedItems[i];
    displayedData.push(item.quantity);
    for(let j = 0; j < theList.length; j++) {
        if(displayedItems[i].id === theList[j].id) {
            productLabels.push(theList[j].name);
        }
    }
    for(let k = 0; k < userClicks.length; k++) {
        if(displayedItems[i] === userClicks[k].id) {
            productData.push(userClicks[k].quantity);
        }
    }
}

const clicksCtx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-unused-vars
const clickChart = new Chart(clicksCtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: productLabels,
        datasets: [{
            label: 'Click Results',
            data: displayedData,
            backgroundColor: '#ffb9b2',
            borderColor: '#11bce1'
        }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0, 0, 0, 0)',
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0, 0, 0, 0)',
                },
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
