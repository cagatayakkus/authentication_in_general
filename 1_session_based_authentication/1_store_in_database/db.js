const mongoose = require("mongoose");

require("dotenv").config();

const dbString = process.env.DB_STRING;

const connection = mongoose.createConnection(dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
});

connection.model("User", UserSchema);

connection.models.User.findOne({
  username: "johndoe",
}).then((user) => {
  if (!user) {
    const initialUser = new connection.models.User({
      username: "johndoe",
      salt: "e35a0472fe205a5a1b4aadd7c0939e2b",
      hash: "1e9e2e6d98107580f18a26a55a979208dc2813c7feb7c1dda5ef1862cb0f53c89bfbc18317a95851d75be8101211ff047dd2caa24d4a9de0c1ec04afedf69a0c",
    });

    initialUser.save();
  }
});

module.exports = connection;
