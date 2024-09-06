import React, { useEffect, useState } from 'react';
import { getBookingsFromLocalStorage } from '../services/localStorage';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookingsFromLocalStorage());
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.selectedTicket}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
