const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/connection');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const ticketRoutes = require('./routes/tickets');
const bookingRoutes = require('./routes/bookings');
const userRoutes = require('./routes/users');

app.use('/api/tickets', ticketRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
