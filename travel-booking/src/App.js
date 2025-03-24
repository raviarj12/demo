import React, { useState } from "react";
import "./App.css";

function App() {
  // State hooks to manage user input
  const [destination, setDestination] = useState("paris");
  const [passengers, setPassengers] = useState(1);
  const [totalCost, setTotalCost] = useState(null);

  // Prices for each destination
  const prices = {
    paris: 500,
    tokyo: 800,
    newyork: 600,
    london: 450,
  };

  // Function to calculate booking
  const calculateBooking = () => {
    const pricePerPerson = prices[destination];
    const total = pricePerPerson * passengers;
    setTotalCost(total);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Travel Agency Booking System</h1>

        <label htmlFor="destination">Choose a Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="paris">Paris - $500</option>
          <option value="tokyo">Tokyo - $800</option>
          <option value="newyork">New York - $600</option>
          <option value="london">London - $450</option>
        </select>

        <label htmlFor="passengers">Number of Passengers:</label>
        <input
          type="number"
          id="passengers"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />

        <button onClick={calculateBooking}>Book Now</button>

        {totalCost !== null && (
          <div className="output">
            You have selected {passengers} passenger(s) for {destination.charAt(0).toUpperCase() + destination.slice(1)}.<br />
            Total cost: ${totalCost}.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
