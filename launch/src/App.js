import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightAPI from "./flightAPI";
import SortedPackagesPage from "./SortedPackagesPage";
import EditPackage from "./EditPackage";
import FlightsPage from "./FlightsPage";
import CarsPage from "./CarsPage";
import FinalBooking from "./FinalBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightAPI />} />
        <Route path="/sorted-packages" element={<SortedPackagesPage />} />
        <Route path="/edit-package" element={<EditPackage />} />
        <Route path="/flights" element={<FlightsPage />}></Route>
        <Route path="/cars" element={<CarsPage />}></Route>
        <Route path="/final-booking" element={<FinalBooking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
