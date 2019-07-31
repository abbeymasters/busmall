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
    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId);{
                list.splice(i, 1);
            }
            return;
        }
    }

    // need new array of three images
    // and a new list without the clicked image
    // need to loop through three times to get three images
    getThreeArray() {
        let randomThree = [];
    }

    hasProducts() {
        return this.list.length > 0;
    }
}

export default ProductSet;