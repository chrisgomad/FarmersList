const Product = require("./Product");

class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(Product) {
        this.products.push(Product)
        this.total += Product.price
    }

    removeProduct(i) {
        if (i >= 0 && i < this.products.length) {
            const [productRemoved] = this.products.splice(i, 1)
            this.total -= productRemoved.price
        }
    }
}

module.exports = Cart;