import React from 'react';
import TicketList from '../components/TicketList';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <div>
      <h1>Museum Ticket Booking</h1>
      <TicketList />
      <BookingForm />
    </div>
  );
};

export default Home;
