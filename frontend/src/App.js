import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import TicketDetails from './pages/TicketDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
