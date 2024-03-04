const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hasanAbdirahman:GhyB4YEYEZORXdgy@grocery.kcszfoa.mongodb.net/?retryWrites=true&w=majority&appName=Grocery", {});

const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on("error", function (err) {
    console.error('Error connecting to MongoDB:', err);
});
