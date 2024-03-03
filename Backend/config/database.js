const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {});

const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on("error", function (err) {
    console.error('Error connecting to MongoDB:', err);
});
