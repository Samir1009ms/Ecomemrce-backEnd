const mongoose = require('mongoose');

const db = () => {

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database connected");

}

module.exports = db;
