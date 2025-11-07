import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutUs() {
  return (
    <Box sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 400 }}>
        About D.Y.Patil College Of Engineering Technology
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, color: 'text.secondary' }}>
        D.Y.Patil College Of Engineering Technology, established in 1998, is a premier institution located in Kasaba Bawada, Kolhapur.
        We offer a four-year full-time Bachelor of Engineering (B.E.) degree in various disciplines, approved by AICTE and affiliated to Shivaji University.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
        Our Vision
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
        To be a global leader in engineering education and research, providing innovative solutions to the industry and society.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
        To provide high-quality engineering education, foster research and innovation, and develop industry-ready professionals with ethical values.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
        Core Values
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
        Integrity, Excellence, Accountability, Respect, and Teamwork.
      </Typography>
    </Box>
  );
}

export default AboutUs;
