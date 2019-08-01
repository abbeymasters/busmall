function renderViews(views, product) {
    const h4 = document.createElement('h4');
    h4.textContent = product.name + ' ';

    const viewsResults = document.createElement('views-results');
    viewsResults.textContent = views.views++;
    h4.appendChild(viewsResults);

    return h4;

}

export default renderViews;