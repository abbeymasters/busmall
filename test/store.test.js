import store from '../src/data/store.js';
import products from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('BusMall');

store.storage = window.sessionStorage;

test('Get & Save Methods', assert => {
    // arrange
    const key = 'color';
    const value = { name: 'aquamarine' };
    // act
    store.save(key, value);
    const keep = store.get(key);

    // assert
    assert.deepEqual(keep, value);
});

test('get products through bootstrapping', assert => {
    // arrange
    
    // act
    const gotProducts = store.getProducts();

    // assert
    assert.deepEqual(gotProducts, products);
});

test('get survey results', assert => {
    // arrange
    
    // act
    const surveyResults = store.getSurveyResults();
    // assert
    assert.deepEqual(surveyResults, []);
});

// test('add survey results', assert => {    
//     // arrange
//     const result1 = {
//         date: new Date().toString(),
//         turns: 12,
//         clicks: [{
//             id: 'bubblegum',
//             clicks: 3
//         }]
//     };

//     const result2 = {
//         date: new Date().toString(),
//         turns: 19,
//         clicks: [{
//             id: 'boots',
//             clicks: 2
//         }]
//     };

//     const expected = [result1, result2];

//     // act
//     store.addSurveyResults(result1);
//     store.addSurveyResults(result2);
//     const surveyResults = store.getSurveyResults();

//     // assert
//     assert.deepEqual(surveyResults, expected);
// });