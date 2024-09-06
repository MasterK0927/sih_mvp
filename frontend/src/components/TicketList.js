import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await axios.get('http://localhost:5000/api/tickets');
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket._id}>
          {ticket.eventName} - ${ticket.price}
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
