const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://theodorus27012:lFq88HN6K66MF8Xe@juara-coding.nizt7yr.mongodb.net/';

const configDB = {
    useNewURLParser: true,
}

const MongoDBConnection = () => {
    mongoose.connect(MONGO_URI).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log("Failed to connect");
        console.log(err);
    })
}

module.exports = {
    MongoDBConnection
}