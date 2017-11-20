import Product from './product';

const productElements = document.querySelectorAll('.product');
let products = [];

Array.prototype.forEach.call(productElements, function (element) {
  products.push(new Product(element));
});
