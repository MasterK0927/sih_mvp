const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Get all tickets
router.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

// Create a new ticket
router.post('/createTicket', async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.status(201).json(ticket);
});

module.exports = router;
