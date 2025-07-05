import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LostPage() {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      position: "relative",
    },
    iconContainer: {
      marginBottom: "32px",
    },
    icon: {
      width: "128px",
      height: "128px",
      backgroundColor: "black",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    questionMark: {
      color: "white",
      fontSize: "48px",
      fontWeight: "bold",
    },
    textContainer: {
      textAlign: "center",
      marginBottom: "32px",
    },
    mainHeading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "black",
      marginBottom: "8px",
      margin: "0 0 8px 0",
    },
    subText: {
      color: "#666",
      fontSize: "14px",
      margin: "0",
    },
    buttonContainer: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    primaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
    },
    secondaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
    },
    dot1: {
      position: "absolute",
      top: "80px",
      left: "40px",
      width: "8px",
      height: "8px",
      backgroundColor: "black",
      borderRadius: "50%",
      opacity: "0.2",
    },
    dot2: {
      position: "absolute",
      top: "160px",
      right: "80px",
      width: "12px",
      height: "12px",
      backgroundColor: "black",
      borderRadius: "50%",
      opacity: "0.1",
    },
    dot3: {
      position: "absolute",
      bottom: "80px",
      left: "25%",
      width: "4px",
      height: "4px",
      backgroundColor: "black",
      borderRadius: "50%",
      opacity: "0.3",
    },
    dot4: {
      position: "absolute",
      bottom: "160px",
      right: "33%",
      width: "8px",
      height: "8px",
      backgroundColor: "black",
      borderRadius: "50%",
      opacity: "0.15",
    },
  };

  const handlePrimaryHover = (e) => {
    e.target.style.backgroundColor = "#333";
  };

  const handlePrimaryLeave = (e) => {
    e.target.style.backgroundColor = "black";
  };

  const handleSecondaryHover = (e) => {
    e.target.style.backgroundColor = "#f5f5f5";
  };

  const handleSecondaryLeave = (e) => {
    e.target.style.backgroundColor = "white";
  };

  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Lost Icon */}
      <div style={styles.iconContainer}>
        <div style={styles.icon}>
          <div style={styles.questionMark}>?</div>
        </div>
      </div>

      {/* Main Message */}
      <div style={styles.textContainer}>
        <h1 style={styles.mainHeading}>You Lost Your Way</h1>
        <p style={styles.subText}>
          Nothing here yet, check starting cards only
        </p>
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.primaryButton}
          onMouseEnter={handlePrimaryHover}
          onMouseLeave={handlePrimaryLeave}
          onClick={() => navigate("/")}
        >
          <Home size={16}  />
          Go Home
        </button>
        
      </div>

      {/* Decorative Elements */}
      <div style={styles.dot1}></div>
      <div style={styles.dot2}></div>
      <div style={styles.dot3}></div>
      <div style={styles.dot4}></div>
    </div>
  );
}
