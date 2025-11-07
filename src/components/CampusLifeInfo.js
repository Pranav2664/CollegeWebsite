import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function CampusLifeInfo() {
  return (
    <Box sx={{ mt: 6, mb: 4, mx: "auto", maxWidth: 800, background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#1746a2", textAlign: "center", textShadow: '1px 2px 8px #5dc1b9' }}>
        Campus Life at D.Y.Patil College
      </Typography>
      <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(90deg, #fff 60%, #e0eafc 100%)', borderRadius: 3, boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Dynamic Student Experience
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Various student clubs and societies: technical, cultural, sports, and social." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Annual festivals: TechFest, Cultural Fest, Sports Meet, and more." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Workshops, seminars, and guest lectures for holistic development." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Modern hostel facilities with WiFi, mess, and recreation rooms." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cafeteria, gymnasium, and medical facilities on campus." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Safe and inclusive environment with anti-ragging measures." />
          </ListItem>
        </List>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Sports & Recreation
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Well-equipped sports complex for cricket, football, basketball, volleyball, and athletics." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Indoor games: table tennis, chess, carrom, and more." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Annual sports competitions and inter-college tournaments." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Yoga and wellness sessions for students and staff." />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default CampusLifeInfo;
