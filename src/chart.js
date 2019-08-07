import store from './data/store.js';
import products from './data/store.js';

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
        if(displayedItems[i].id === userClicks[k].id) {
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
            label: 'View Results',
            data: displayedData,
            backgroundColor: '#ffb9b2',
            borderColor: '#11bce1'
        },
        {
            label: 'Clicks Results',
            data: productData,
            backgroundColor: '#e1e1e1'
        }
        ]
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


// // Reset button 
// const resetButton = document.getElementById('back-to-home');
// resetButton.addEventListener('click', () => {
//     // Reset user clicks
//     let userClicks = store.getClicks();
//     let displayedItems = store.getItemsDisplayed();
  
//     for(let i = 0; i < products.length; i++){
//         for(let j = 0; j < userClicks.length; j++) {
//             if(userClicks[j].id === products[i].id) {
//                 products[i].clicks += userClicks[j].quantity;
//             }
//         }
//         for(let z = 0; z < displayedItems.length; z++) {
//             if(displayedItems[z].id === products[i].id) {
//                 products[i].displays += displayedItems[z].quantity;
//             }
//         }
//     }
//     store.save('products', products);
//     userClicks = [];
//     store.save('user-clicks', userClicks);
//     displayedItems = [];
//     store.save('items-displayed', displayedItems);
// });