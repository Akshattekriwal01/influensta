const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    console.log("DB connected");
  } catch (err) {
    console.log(erre);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connect;
