const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice, cb) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      cart.totalCount = cart.totalCount ? cart.totalCount + 1 : 1;
      fs.writeFile(
        p,
        JSON.stringify(cart),
        (err) => {
          console.log(err);
        },
        () => {
          cb(cart);
        }
      );
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        try {
          cart = JSON.parse(fileContent);
        } catch (err) {
          console.log(err);
          cb(cart);
        }
      }
      cb(cart);
    });
  }

  static deleteProduct(id) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const product = cart.products.find((prod) => prod.id === id);
      if (!product) {
        return;
      }
      cart.totalPrice = cart.totalPrice - +product.price;
      cart.totalCount = cart.totalCount - +product.qty;
      cart.products = cart.products.filter((prod) => prod.id === id);
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
