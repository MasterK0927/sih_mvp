const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings
router.get('/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('ticketId').populate('userId');
  res.json(bookings);
});

// Create a new booking
router.post('/createBooking', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
});

module.exports = router;
