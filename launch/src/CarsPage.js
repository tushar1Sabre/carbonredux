import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import carsData from "./jsondata/carsData";

const CarsPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const bookedFlight = location.state ? location.state.bookedFlight : null;

  const handleBookNow = (car) => {
    navigate("/final-booking", {
      state: { bookedCar: car, bookedFlight: bookedFlight },
    });
  };

  return (
    <div>
      <h1>All Cars</h1>
      {carsData.map((car, index) => (
        <div key={index}>
          <div>
            {car.origin} to {car.destination}
          </div>
          <div>Price: ${car.price}</div>
          <button onClick={() => handleBookNow(car)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default CarsPage;
