import React from "react";

const ApplyNowButton = ({ onClick }) => (
  <button
    style={{
      background: "#1746a2",
      color: "#fff",
      fontWeight: 700,
      fontSize: "1.6rem",
      border: "none",
      borderRadius: "12px",
      padding: "18px 36px 32px 36px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "32px auto 0 auto",
      boxShadow: "0 2px 8px rgba(23,70,162,0.12)",
      transition: "background 0.2s"
    }}
    onClick={onClick}
  >
    APPLY NOW
    <span style={{ fontSize: "2.2rem", marginTop: "8px" }}>▼</span>
  </button>
);

export default ApplyNowButton;
