class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }
  removeProduct(index) {
    let product = this.products.splice(index, 1)[0];
    this.total -= product.price;
  }
}

module.exports = {
  Cart,
};
