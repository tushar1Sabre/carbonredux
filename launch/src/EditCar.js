import React from "react";

const EditCar = ({ currentCar, currentFlight, availableCars, onSelectCar }) => {
  const handleSelectCar = (car) => {
    onSelectCar(car);
  };

  const calculatePriceDifference = (car) => {
    const difference = car.price - currentCar.price;
    return difference;
  };

  const calculateCarbonScoreDifference = (car) => {
    const newTotalCarbonEmission =
      car.carbonEmission + currentFlight.carbonEmission;
    const newCarbonScore = normalizeCarbonScore(newTotalCarbonEmission);
    const currentCarbonScore = normalizeCarbonScore(
      currentFlight.carbonEmission + currentCar.carbonEmission
    );
    return newCarbonScore - currentCarbonScore;
  };

  const sortedCabs = availableCars.slice().sort((a, b) => {
    const differenceA = Math.abs(calculatePriceDifference(a));
    const differenceB = Math.abs(calculatePriceDifference(b));
    return differenceA - differenceB;
  });

  // const newCarbonScore = (car) => {
  //   const totalCarbonEmission =
  //     car.carbonEmission + currentFlight.carbonEmission;
  //   const carbonScore = normalizeCarbonScore(totalCarbonEmission);
  //   return carbonScore;
  // };

  const normalizeCarbonScore = (carbonEmission) => {
    return (carbonEmission / 474) * 100;
  };

  return (
    <div>
      <div>
        <h3 className="ava">Available Cars</h3>
        {sortedCabs.map((car) => (
          <div key={car.id} className="editlist">
            <p>
              Type: {car.type} - {car.origin} to {car.destination}
            </p>
            <p>
              <b>Price: </b> ${car.price}
            </p>
            <p>
              <b>Price Difference:</b>{" "}
              {calculatePriceDifference(car) > 0
                ? `+ $${Math.abs(calculatePriceDifference(car))}`
                : `- $${Math.abs(calculatePriceDifference(car))}`}
            </p>
            <p>
              <b>Carbon Rate Difference:</b>{" "}
              {calculateCarbonScoreDifference(car) > 0
                ? `+ ${calculateCarbonScoreDifference(car).toFixed(2)}`
                : `- ${Math.abs(calculateCarbonScoreDifference(car)).toFixed(
                    2
                  )}`}
            </p>
            <p>
              {/* <b>New carbon score:</b> {newCarbonScore(car).toFixed(2)} */}
            </p>
            {/* <p>Carbon Emission: {car.carbonEmission}</p> */}
            <button className="select" onClick={() => handleSelectCar(car)}>
              Select Cab
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditCar;
