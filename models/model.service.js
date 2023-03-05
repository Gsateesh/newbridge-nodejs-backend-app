const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: false },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
    createdOn: { type: Date, default: () => new Date() }
});

module.exports = mongoose.model('service', ServiceSchema, 'service')
