// This file contains the DYPATIL banner image for use above the navbar.
// Place your image in the public directory and reference it here.
import React from "react";

const Banner = () => (
  <div style={{ width: "100%", background: "#1746a2" }}>
    <img
      src="/dypatil-banner.png"
      alt="DY Patil College Banner"
      style={{ width: "100%", display: "block", objectFit: "cover" }}
      draggable={false}
    />
  </div>
);

export default Banner;
