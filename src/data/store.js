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
    }
};

export default store;