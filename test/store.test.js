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


test('add survey results', (assert) => {
    // act
    const result1 = {
        date: new Date().toString(),
        turns: 12,
        misIds: [{
            id: 'bubblegum',
            misses: 3
        }]
    };

    const result2 = {
        date: new Date().toString(),
        turns: 19,
        misIds: [{
            id: 'boots',
            misses: 1
        }]
    };

    const expected = [result1, result2];

    // act
    store.addSurveyResult(result1);
    store.addSurveyResult(result2);
    const surveyResults = store.getSurveyResults();

    // arrange
    assert.deepEqual(surveyResults, expected);
});

test('get clicks', assert => {
    // arrange
    const expected = [];

    // act
    const result = store.getClicks();

    // assert
    assert.deepEqual(result, expected);
});

