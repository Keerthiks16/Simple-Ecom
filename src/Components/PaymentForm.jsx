import React, { useState } from "react";
import "./PaymentForm.css"; // Import the CSS file

const PaymentForm = ({ cost }) => {
  // Sample data for demonstration; these can be passed as props or calculated dynamically
  const price = cost;
  const gst = 0.18 * cost; // GST amount
  const deliveryCharges = 20;
  const maintenanceCharge = 30;
  const finalSum = price + gst + deliveryCharges + maintenanceCharge;

  const [paymentMode, setPaymentMode] = useState("");

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  return (
    <div className="payment-form">
      <h3 className="payment-header">Payment Details</h3>
      <div className="payment-details">
        <p className="payment-item">
          <span>Price:</span> ₹{price}
        </p>
        <p className="payment-item">
          <span>GST:</span> ₹{gst}
        </p>
        <p className="payment-item">
          <span>Delivery Charges:</span> ₹{deliveryCharges}
        </p>
        <p className="payment-item">
          <span>Maintenance Charge:</span> ₹{maintenanceCharge}
        </p>
        <hr className="divider" />
        <p className="payment-item total">
          <span>Total Cost:</span> ₹{finalSum}
        </p>
      </div>
      <div className="payment-mode">
        <label htmlFor="paymentMode">Payment Mode:</label>
        <select
          id="paymentMode"
          value={paymentMode}
          onChange={handlePaymentModeChange}
          className="payment-select"
        >
          <option value="">Select Payment Mode</option>
          <option value="Net Banking">Net Banking</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>
      <center>
        <button className="paym-proceed">Proceed</button>
      </center>
    </div>
  );
};

export default PaymentForm;
