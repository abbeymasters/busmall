import products from '../src/data/products.js';
import ProductSet from '../src/product-set.js';

const test = QUnit.test;

QUnit.module('Product Set');

test('Copying the source list', assert => {
    // arrange
    // need to import the products data

    // act
    const productSet = new ProductSet(products);

    // assert
    assert.deepEqual(productSet.list, products);
    assert.notEqual(productSet.list, products);
});

test('Get a random tree', assert => {
    // arrange
    const productSet = new ProductSet(products);

    // act
    const product = productSet.getRandomProduct();

    // assert
    assert.ok(products.includes(product));
});