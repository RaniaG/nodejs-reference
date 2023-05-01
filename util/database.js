const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  mongoClient
    .connect(
      "mongodb+srv://rania:CVq4Kughr743qzYW@cluster0.rekfvvr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("connected");
      cb(client);
      _db = client.db();
    })
    .catch(console.log);
};

const getDb = () => {
  if (_db) return _db;
  else throw "no Database available";
};
module.exports = {
  mongoConnect,
  getDb,
};
