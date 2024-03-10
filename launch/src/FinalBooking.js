import React from "react";
import { useLocation } from "react-router-dom";

const FinalBooking = () => {
  const location = useLocation();
  const bookedCar = location.state ? location.state.bookedCar : null;
  const bookedFlight = location.state ? location.state.bookedFlight : null;

  return (
    <div>
      <h1>Final Booking Details</h1>
      <h2>Booked Flight</h2>
      {bookedFlight && (
        <div>
          <div>Origin: {bookedFlight.origin}</div>
          <div>Destination: {bookedFlight.destination}</div>
          <div>Price: ${bookedFlight.price}</div>
        </div>
      )}
      <h2>Booked Car</h2>
      {bookedCar && (
        <div>
          <div>Origin: {bookedCar.origin}</div>
          <div>Destination: {bookedCar.destination}</div>
          <div>Price: ${bookedCar.price}</div>
        </div>
      )}
    </div>
  );
};

export default FinalBooking;
