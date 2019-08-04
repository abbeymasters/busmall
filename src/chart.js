


const clicksCtx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-unused-vars
const clickChart = new Chart(clicksCtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ,
        datasets: [{
            label: 'Click Results',
            data: ,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)'
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
