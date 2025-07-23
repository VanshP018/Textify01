import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../css/Sidebar.css";

const PersonalDetails = ({ setToShow }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Contact Details</h2>
        <p className="popup-detail">
          <b>ID:</b> {user.id}
        </p>
        <p className="popup-detail">
          <b>Name:</b> {user.name}
        </p>
        <p className="popup-detail">
          <b>Email:</b> {user.email}
        </p>
        <button
          className="popup-close-btn"
          onClick={() => setToShow((prev) => !prev)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
