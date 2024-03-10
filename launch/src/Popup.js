import React from "react";

const Popup = ({ onClose, onConfirm }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Do you wana go sustainable?</h2>
        <div className="button-container">
          <button className="no" onClick={onClose}>
            No
          </button>
          <button className="yes" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
