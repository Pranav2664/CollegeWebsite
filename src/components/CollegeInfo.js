import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ApplyNowButton from './ApplyNowButton';
import RegistrationForm from './RegistrationForm';

function CollegeInfo() {
  const [showForm, setShowForm] = useState(false);
  return (
    <Box sx={{ position: 'relative', textAlign: "center", mt: 6, mb: 4, background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)", borderRadius: 4, boxShadow: 3, px: 3, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#000" }}>
        Earn Bachelors in Engineering, and get ready to help
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#000", mt: 1 }}>
        solve the world’s greatest challenges
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, color: "#000", fontWeight: 500 }}>
        Roll up your sleeves and work alongside the brightest students, recognized teachers and expert industry partners.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, color: "#000" }}>
        DTE CODE: <span style={{ color: "#1746a2" }}>6250</span>
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#000" }}>
        D.Y. Patil College of Engineering & Technology
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#000" }}>
        Kasaba Bawada, Kolhapur.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#000" }}>
        An Autonomous Institute
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, mb: 3, color: "#000", fontWeight: 600 }}>
        Approved by AICTE, DTE-Govt of Maharashtra and affiliated to Shivaji University
      </Typography>
    </Box>
  );
}

export default CollegeInfo;
