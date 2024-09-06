import React, { useState } from 'react';
import { saveBookingToLocalStorage } from '../services/localStorage';

const BookingForm = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { selectedTicket, name, email, phone };
    saveBookingToLocalStorage(booking);
    alert('Booking saved locally!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setSelectedTicket(e.target.value)}>
        <option value="">Select Ticket</option>
        {tickets.map((ticket) => (
          <option key={ticket._id} value={ticket._id}>
            {ticket.eventName} - {ticket.price}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Save Booking</button>
    </form>
  );
};

export default BookingForm;
