export const saveBookingToLocalStorage = (booking) => {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};

export const getBookingsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('bookings')) || [];
};

export const clearLocalStorage = () => {
  localStorage.removeItem('bookings');
};
