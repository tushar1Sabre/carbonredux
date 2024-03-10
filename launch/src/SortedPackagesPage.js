import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SortedPackagesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sortedPackages = location.state ? location.state.sortedPackages : [];
  const [totalPriceLimit, setTotalPriceLimit] = useState(0);

  const handleBookNow = (pkg) => {
    navigate("/edit-package", { state: { bookedPackage: pkg } });
  };

  const filteredPackages = sortedPackages.filter((pkg) => {
    if (totalPriceLimit > 0) {
      return pkg.flight.price + pkg.car.price <= totalPriceLimit;
    } else {
      return true; // Show all packages if no total price limit is set
    }
  });

  return (
    <div>
      <h1 className="header2">
        <b className="green"> Greenly- </b> Curated Packages
      </h1>
      <div className="total-price-filter">
        <label htmlFor="totalPrice">
          <b>Set your Price Limit:</b>
        </label>
        <input
          className="input-limit"
          type="number"
          id="totalPrice"
          value={totalPriceLimit}
          onChange={(e) => setTotalPriceLimit(e.target.value)}
        />
      </div>
      <div className="grid-container">
        {filteredPackages.map((pkg, index) => (
          <div key={index} className="card">
            {/* Package details */}
            <div className="vehicle">
              {/* Flight details */}
              <div className="space-bottom">
                <b>Flight:</b> {pkg.flight.origin} <b>&#x2192;</b>{" "}
                {pkg.flight.destination}
                <p>
                  <b>Price:</b> {pkg.flight.price}
                </p>
                <p>
                  <b>Carbon Emission:</b> {pkg.flight.carbonEmission}
                </p>
              </div>
              {/* Car details */}
              <div>
                <b>Cab:</b> {pkg.car.origin} <b>&#x2192;</b>{" "}
                {pkg.car.destination}
                <p>
                  <b>Price:</b> {pkg.car.price}
                </p>
                <p>
                  <b>Carbon Emission:</b> {pkg.car.carbonEmission}
                </p>
              </div>
            </div>
            {/* Price and book button */}
            <div className="price">
              <div>
                <b className="green">Carbon Rate:</b>{" "}
                <b className="green">{pkg.carbonScore.toFixed(2)}</b>
              </div>
              <div>
                <b>Total Price:</b> ${pkg.flight.price + pkg.car.price}
              </div>
            </div>
            <div>
              <button className="bookbutton" onClick={() => handleBookNow(pkg)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedPackagesPage;
