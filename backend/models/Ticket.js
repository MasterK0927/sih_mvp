const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventName: String,
  eventDate: Date,
  price: Number,
  available: Boolean,
});

module.exports = mongoose.model('Ticket', TicketSchema);
