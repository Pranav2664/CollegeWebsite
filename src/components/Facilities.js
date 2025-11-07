import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const facilities = [
  {
    icon: "https://img.icons8.com/ios/50/000000/wifi--v1.png",
    title: "Internet Wifi",
    desc: "High-speed campus-wide WiFi for students and staff."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/bedroom.png",
    title: "Hostel",
    desc: "Separate hostels for boys and girls with modern amenities."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/conference-call.png",
    title: "Qualified Staff",
    desc: "Highly qualified and experienced teaching faculty."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/handshake.png",
    title: "Placement Assistance",
    desc: "100% placement assistance and training for students."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/graduation-cap.png",
    title: "University Toppers",
    desc: "Consistent record of university rank holders and toppers."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/library.png",
    title: "Library",
    desc: "Well-stocked library with digital resources and study spaces."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/bus.png",
    title: "Transport",
    desc: "College bus facility for students from various locations."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/restaurant.png",
    title: "Canteen",
    desc: "Hygienic canteen serving nutritious food and snacks."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/sports.png",
    title: "Sports Facilities",
    desc: "Indoor and outdoor sports facilities for holistic development."
  }
];

function Facilities() {
  return (
    <Box sx={{ mt: 6, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1746a2' }}>
        College Facilities
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {facilities.map((f, idx) => (
          <Grid item xs={12} sm={6} md={4} key={f.title}>
            <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 2 }}>
              <img src={f.icon} alt={f.title} style={{ height: 40 }} />
              <Typography variant="h6" sx={{ mt: 2 }}>{f.title}</Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                {f.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Facilities;
