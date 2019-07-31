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

test('Get a random product', assert => {
    // arrange
    const productSet = new ProductSet(products);

    // act
    const product = productSet.getRandomProduct();

    // assert
    assert.ok(products.includes(product));
});

test('Remove a product from list', assert => {
    // arrange
    const productSet = new ProductSet(products);
    const productToRemove = products[0];

    // act
    productSet.removeById(productToRemove.id);

    // assert
    assert.notOk(productSet.list.includes(productToRemove));
});