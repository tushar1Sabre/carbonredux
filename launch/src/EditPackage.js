import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditFlight from "./EditFlight";
import EditCar from "./EditCar";
import flightsData from "./jsondata/flightsData";
import carsData from "./jsondata/carsData";

const EditPackage = () => {
  const location = useLocation();
  const bookedPackage = location.state ? location.state.bookedPackage : null;
  const [isEditingFlight, setIsEditingFlight] = useState(false);
  const [isEditingCar, setIsEditingCar] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(bookedPackage.flight);
  const [selectedCar, setSelectedCar] = useState(bookedPackage.car);
  const [carbonScore, setCarbonScore] = useState(bookedPackage.carbonScore);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const totalCarbonEmission =
      selectedFlight.carbonEmission + selectedCar.carbonEmission;
    const normalizedCarbonScore = (totalCarbonEmission / 474) * 100;
    setCarbonScore(normalizedCarbonScore);
  }, [selectedFlight, selectedCar]);

  const handleFlightEdit = () => {
    setIsEditingFlight(true);
  };

  const handleCarEdit = () => {
    setIsEditingCar(true);
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setIsEditingFlight(false);
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setIsEditingCar(false);
  };

  const handleConfirmNow = () => {
    setIsConfirmed(true);
  };

  return (
    <div>
      <h2 className="header2">Edit your package</h2>
      {/* <h3 className="header2">Selected Package</h3> */}
      <div className="grid-container">
        {bookedPackage && (
          <div className="card2">
            <div className="leftright">
              <div>
                <div>
                  <b>Flight:</b> {selectedFlight.origin} <b>&#x2192;</b>{" "}
                  {selectedFlight.destination}
                  <p>
                    <b>Price:</b> {selectedFlight.price}
                  </p>
                  {!isConfirmed && (
                    <button className="edit-button" onClick={handleFlightEdit}>
                      Edit Flight
                    </button>
                  )}
                </div>
                <div className="cabs">
                  <b>Cab:</b> {selectedCar.origin} <b>&#x2192;</b>{" "}
                  {selectedCar.destination}
                  <p>
                    <b>Price:</b> {selectedCar.price}
                  </p>
                  {!isConfirmed && (
                    <button className="edit-button" onClick={handleCarEdit}>
                      Edit Cab
                    </button>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="green">
                  <b>Carbon Rate: {carbonScore.toFixed(2)}</b>
                </div>
                <div>
                  <b>Total Price:</b> $
                  {selectedFlight.price + selectedCar.price}
                </div>
                {!isConfirmed && (
                  <button className="confirm-button" onClick={handleConfirmNow}>
                    Confirm Now
                  </button>
                )}
              </div>
            </div>
            {isConfirmed && (
              <div className="confirmation-message">
                <p>Your booking has been confirmed!</p>
              </div>
            )}
            {isEditingFlight && (
              <EditFlight
                currentFlight={selectedFlight}
                currentCar={selectedCar}
                availableFlights={flightsData}
                onSelectFlight={handleFlightSelect}
              />
            )}
            {isEditingCar && (
              <EditCar
                currentCar={selectedCar}
                currentFlight={selectedFlight}
                availableCars={carsData}
                onSelectCar={handleCarSelect}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPackage;
