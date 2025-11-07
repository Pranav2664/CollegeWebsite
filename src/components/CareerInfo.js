import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function CareerInfo() {
  return (
    <Box sx={{ mt: 6, mb: 4, mx: "auto", maxWidth: 800 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#1746a2", textAlign: "center" }}>
        Career Opportunities at D.Y.Patil College
      </Typography>
  <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(90deg, #fff 60%, #e0eafc 100%)', borderRadius: 3, boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Why Join Us?
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Work with a reputed and autonomous engineering institute." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Collaborative, innovative, and growth-oriented work environment." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Opportunities for research, training, and professional development." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Attractive compensation and benefits." />
          </ListItem>
        </List>
      </Paper>
  <Paper sx={{ p: 3, mb: 3, background: 'linear-gradient(90deg, #fff 60%, #e0eafc 100%)', borderRadius: 3, boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Current Openings
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Professors, Associate Professors, and Assistant Professors in all engineering branches." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Lab Instructors and Technical Assistants." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Administrative and support staff." />
          </ListItem>
        </List>
      </Paper>
  <Paper sx={{ p: 3, background: 'linear-gradient(90deg, #fff 60%, #e0eafc 100%)', borderRadius: 3, boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          How to Apply
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Send your updated resume and cover letter to career.dypcet@dypgroup.edu.in" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mention the position applied for in the subject line." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Shortlisted candidates will be contacted for interview." />
          </ListItem>
        </List>
        <Typography variant="body2" sx={{ mt: 2 }}>
          For more information, visit our website or contact the HR department.
        </Typography>
      </Paper>
    </Box>
  );
}

export default CareerInfo;
