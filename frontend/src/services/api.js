import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTickets = () => axios.get(`${API_URL}/tickets`);
export const getBookings = () => axios.get(`${API_URL}/bookings`);
export const createBooking = (booking) =>
  axios.post(`${API_URL}/bookings`, booking);
