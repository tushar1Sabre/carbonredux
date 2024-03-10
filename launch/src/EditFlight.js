import React from "react";

const EditFlight = ({
  currentFlight,
  currentCar,
  availableFlights,
  onSelectFlight,
}) => {
  const handleSelectFlight = (flight) => {
    onSelectFlight(flight);
  };

  const calculatePriceDifference = (flight) => {
    const difference = flight.price - currentFlight.price;
    return difference;
  };

  const calculateCarbonScoreDifference = (flight) => {
    const newTotalCarbonEmission =
      flight.carbonEmission + currentCar.carbonEmission;
    const newCarbonScore = normalizeCarbonScore(newTotalCarbonEmission);
    const currentCarbonScore = normalizeCarbonScore(
      currentFlight.carbonEmission + currentCar.carbonEmission
    );
    return newCarbonScore - currentCarbonScore;
  };

  const sortedFlights = availableFlights.slice().sort((a, b) => {
    const differenceA = Math.abs(calculatePriceDifference(a));
    const differenceB = Math.abs(calculatePriceDifference(b));
    return differenceA - differenceB;
  });

  const normalizeCarbonScore = (carbonEmission) => {
    return (carbonEmission / 474) * 100;
  };

  return (
    <div>
      <h3 className="ava">Available Flights</h3>
      {sortedFlights.map((flight) => (
        <div key={flight.id} className="editlist">
          <p>
            {flight.airline} - {flight.origin} to {flight.destination}
          </p>
          <p>
            <b>Price:</b> ${flight.price}
          </p>
          <p>
            <b>Price Difference:</b>{" "}
            {calculatePriceDifference(flight) > 0
              ? `+ $${Math.abs(calculatePriceDifference(flight))}`
              : `- $${Math.abs(calculatePriceDifference(flight))}`}
          </p>
          <p>
            <b>Carbon Rate Difference:</b>{" "}
            {calculateCarbonScoreDifference(flight) > 0
              ? `+ ${calculateCarbonScoreDifference(flight).toFixed(2)}`
              : `- ${Math.abs(calculateCarbonScoreDifference(flight)).toFixed(
                  2
                )}`}
          </p>
          <button onClick={() => handleSelectFlight(flight)} className="select">
            Select Flight
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditFlight;
