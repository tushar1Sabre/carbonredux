import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import flightsData from "./jsondata/flightsData";
import carsData from "./jsondata/carsData";
// import backgroundImage from "./hackimage.avif";

const FlightAPI = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
    navigate("/flights");
  };

  const handleConfirmDialog = () => {
    const sortedPackages = [];

    flightsData.forEach((flight) => {
      carsData.forEach((car) => {
        const totalCarbonEmission = flight.carbonEmission + car.carbonEmission;
        const carbonScore = normalizeCarbonScore(totalCarbonEmission);
        sortedPackages.push({ flight, car, carbonScore });
      });
    });

    sortedPackages.sort((a, b) => a.carbonScore - b.carbonScore);
    console.log(sortedPackages);
    navigate("/sorted-packages", { state: { sortedPackages } });
  };

  // EDITED
  const normalizeCarbonScore = (carbonEmission) => {
    return (carbonEmission / 474) * 100;
  };

  return (
    <div>
      <div className="fullone">
        <div className="second">
          <h2 className="info">
            Recommendation engine for Sabre's corporate point of sale to enable
            sustainable travel...
          </h2>
        </div>

        <div className="form-container">
          <h1 className="header">Carbon Redux</h1>
          <p className="tagline">Clear skies, Guilt free flies.</p>
          {/* <p className="info">
          A recommendation engine for Sabre's corporate point of sale to enable
          sustainable travel
        </p> */}
          <form onSubmit={handleSubmit} className="form">
            <div className="input-field">
              <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit" className="search-button">
              Search Flights
            </button>
          </form>
        </div>

        <div>
          {showPopup && (
            <Popup onClose={handleCancel} onConfirm={handleConfirmDialog} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightAPI;
