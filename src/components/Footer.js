import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer({ darkMode, logo }) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: darkMode ? '#101a3c' : '#f5f7fa',
        color: 'text.secondary',
        py: 6,
        borderTop: 2,
        borderColor: '#1746a2',
        mt: 4,
        boxShadow: 2
      }}
    >
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 6,
        mb: 4
      }}>
        <Box sx={{ minWidth: 180 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: '#1746a2', fontWeight: 700 }}>About Us</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Internal Committees</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Admissions</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Alumni</Typography>
        </Box>
        <Box sx={{ minWidth: 180 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: '#1746a2', fontWeight: 700 }}>Departments</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Training & Placement</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Culture</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#1746a2', textDecoration: 'underline' } }}>Application Form</Typography>
        </Box>
        <Box sx={{ minWidth: 220, textAlign: 'center' }}>
          <img src={logo} alt="DYP Logo" style={{ height: 60, marginBottom: 8, borderRadius: 4, boxShadow: '0 2px 8px rgba(23,70,162,0.15)' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 2, color: '#1746a2', mt: 1 }}>DY PATIL GROUP</Typography>
        </Box>
        <Box sx={{ minWidth: 260 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: '#1746a2', fontWeight: 700 }}>
            D. Y. Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur
          </Typography>
          <Typography variant="body2">Email: <span style={{ color: '#1746a2', fontWeight: 500 }}>info.dypcet@dypgroup.edu.in</span></Typography>
          <Typography variant="body2">Tel: <span style={{ color: '#1746a2', fontWeight: 500 }}>0231-2601431/32/33</span></Typography>
          <Typography variant="body2">Send your resumes for Jobs: <span style={{ color: '#1746a2', fontWeight: 500 }}>career.dypcet@dypgroup.edu.in</span></Typography>
          <Typography variant="body2">For student document verification apply through <span style={{ color: '#1746a2', fontWeight: 500 }}>e-office</span></Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2" sx={{ mt: 2, color: '#1746a2', fontWeight: 600 }}>
          Approved by AICTE, DTE -Govt. of Maharashtra & Affiliated to Shivaji University
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          © 2025 DYP Group.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Last Updated on: <span style={{ color: '#1746a2', fontWeight: 500 }}>September 12, 2025</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
