import React from "react";
import "./Profile.css"; // Import the updated CSS file

function CustomerProfile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* Round profile picture */}
        <div className="profile-pic">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="round-pic"
          />
        </div>

        {/* Customer information */}
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>
            <strong>Address:</strong> 123 Shopping Lane, Cityville
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </div>
      </div>

      {/* Buttons for different actions */}
      <div className="profile-list list-group">
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action active btn btn-primary dropdown-toggle"
          aria-current="true"
        >
          The current button
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Orders
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Customer Care
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Invite Friends & Earn
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Coupon Quest
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Wallet
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Saved Cards
        </button>

        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          My Rewards
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Address
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Notifications
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Return Creation Demo
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          How To Return
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          How Do I Redeem My Coupon?
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Terms & Conditions
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Promotions Terms & Conditions
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Returns & Refunds Policy
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          We Respect Your Privacy
        </button>
        <button
          type="button"
          className="profile-btn list-group-item list-group-item-action"
        >
          Fees & Payment
        </button>
      </div>
    </div>
  );
}

export default CustomerProfile;
