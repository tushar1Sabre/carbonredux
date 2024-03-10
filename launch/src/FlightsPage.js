// FlightsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import flightsData from "./jsondata/flightsData";

const FlightsPage = () => {
  const navigate = useNavigate();

  const handleBookNow = (flight) => {
    navigate("/cars", { state: { bookedFlight: flight } });
  };

  return (
    <div>
      <h1>All Flights</h1>
      {flightsData.map((flight, index) => (
        <div key={index}>
          <div>
            {flight.origin} to {flight.destination}
          </div>
          <div>Price: ${flight.price}</div>
          <button onClick={() => handleBookNow(flight)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default FlightsPage;
