const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, default: 'confirmed' },
});

module.exports = mongoose.model('Booking', BookingSchema);
