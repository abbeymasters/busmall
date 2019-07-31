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