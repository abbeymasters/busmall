// eslint-disable-next-line quotes
import store from './data/store.js';

function renderViews(views, product) {
    const h4 = document.createElement('h4');
    h4.textContent = product.name + ': ';

    const viewsResults = document.createElement('views-results');
    viewsResults.textContent = views.views++;
    h4.appendChild(viewsResults);

    return h4;
}

export default renderViews;

// rendering clicks

export function renderClicks(clicks, product) {
    const h3 = document.createElement('h3');
    h3.textContent = product.name + ': ';

    const clicksResults = document.createElement('clicks-results');
    clicksResults.textContent = clicks.clicks++;
    store.save
    h3.appendChild(clicksResults);

    return h3;
}

