const mongoose = require('mongoose');

const CustomerObject = {
    id: { type: String, unique: true },
    nama: { type: String },
    email: { type: String },
    age: { type: Number },
    phone: { type: String },
};

const CustomerSchema = new mongoose.Schema(CustomerObject);

const CustomerModel = new mongoose.model("Customer", CustomerSchema);

module.exports = {
    CustomerModel,
    CustomerObject,
    CustomerSchema
}