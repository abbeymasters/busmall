import { getRandomInt } from './utility-functions.js';

// getting new list of products
class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        return product;
    }
}

export default ProductSet;