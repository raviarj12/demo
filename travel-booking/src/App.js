import React, { useState } from "react";
import "./App.css";
import image from  "./C:\Users\Raviraj\Desktop\travelage\travel-ibk7fgrvtvhs7qzg.webp";

function App() {
  const myStyle ={
    backgroundImage: 'img',
    imageSize: '50xp',
    imageRehate: 'rehate'
    
  }
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

          // all cuntry booking prisce ret in </option value="......">
        >
          <option value="paris">Paris - $500</option>
          <option value="tokyo">Tokyo - $800</option>
          <option value="newyork">New York - $600</option>
          <option value="london">London - $450</option>
          <option value="Usa">Usa - $560</option>
          <option value="canada">canada - $780</option>
          <option value="afganistan">afganistan - $670</option>
          <option value="alabani">alabani - $678</option>
          <option value="algeria">algeria - $890</option>
          <option value="andorra">andorra - $60</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda - $8905</option>
          <option value="Argentina">Argentina - $345</option>
          <option value="Armenia">Armenia - $793</option>
          <option value="Australia">Australia - $645</option>
          <option value="Austria">Austria - $777</option>
          <option value="cameroon">cameroon - $467</option>
          <option value="china">chaina - $890</option>
          <option value="colimbia">colimbia -$787</option>
          <option value="cuba">cuba - $878</option>
          <option value="coritain">coritain - $890</option>
          <option value="denmark">denmark - $677</option>
          <option value="fiji">fiji - $898</option>
          <option value="france">france - $999</option>

          

          
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


