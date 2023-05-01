const getDb = require("../util/database").getDb;

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then(console.log)
      .catch(console.log);
  }

  static update(id, updatedProduct) {
    this.fetchAll((all) => {
      const index = all.findIndex((p) => p.id === id);
      all[index] = { ...all[index], ...updatedProduct };
      fs.writeFile(p, JSON.stringify(all), (err) => {
        console.log(err);
      });
    });
  }

  static delete(id) {
    this.fetchAll((all) => {
      const rest = all.filter((p) => p.id !== id);
      fs.writeFile(p, JSON.stringify(rest), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchOne(id, cb) {
    getProductsFromFile((all) => {
      const result = all.find((p) => p.id === id);
      cb(result);
    });
  }
};
