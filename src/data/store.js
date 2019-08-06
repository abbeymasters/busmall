import products from './products.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let items = store.get('products');
        if(!items) {
            store.save('products', products);
            items = products;
        }
        return items;
    }, 
    findProduct(products, code) {
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            
            if(product.id === code) {
                return product;
            }
        }
        return null;
    },
    getSurveyResults() {
        let surveyResults = store.get('SURVEY_RESULTS');
        return surveyResults || [];
    }, 
    addSurveyResult(result) {
        const surveyResults = store.getSurveyResults();
        surveyResults.push(result);
        store.save('SURVEY_RESULTS', surveyResults);
    }, 
    getClicks() {
        let getItems = store.get('items');
        if(!getItems) {
            getItems = [];
        }
        return getItems;
    },
    getItemsDisplayed() {
        let itemsDisplayed = store.get('items-displayed');
        if(!itemsDisplayed) {
            itemsDisplayed = [];
        }
        return itemsDisplayed;
    },
    saveEachDisplay(shownImage) {
        for(let i = 0; i < shownImage.length; i++) {
            let itemsDisplayed = this.getItemsDisplayed();
            let id = shownImage[i].id;
            const lineItem = this.findProduct(itemsDisplayed, id);

            if(lineItem) {
                lineItem.quantity++;
            }
            else {
                const lineItem = {
                    id: id,
                    quantity: 1
                };
    
                itemsDisplayed.push(lineItem);
            }
            
            store.save('items-displayed', itemsDisplayed);
        }}
};

export default store;