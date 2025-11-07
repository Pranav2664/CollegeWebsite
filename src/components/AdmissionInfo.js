import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

function AdmissionInfo() {
  return (
    <Box sx={{ mt: 6, mb: 4, mx: "auto", maxWidth: 1000 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#1746a2", textAlign: "center" }}>
        Admission Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Eligibility Criteria
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Age: Minimum 17 years as on 31st December of the admission year." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Qualification: Passed 10+2 (HSC) or equivalent with Physics, Mathematics, and Chemistry/Biology/Technical Vocational subject." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Minimum Marks: At least 45% marks (40% for reserved categories) in the above subjects taken together." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Entrance Exam: Must have appeared for MHT-CET or JEE Main (Paper 1)." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Other: Should meet all DTE Maharashtra norms for engineering admissions." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Important Dates (2025)
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Application Start: May 10, 2025" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Date to Apply: June 15, 2025" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="MHT-CET Exam: May 20-30, 2025" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="JEE Main (Session 2): April 2025" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Counseling & Document Verification: July 2025" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Cutoff (Previous Year)
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ background: "#1746a2" }}>
                      <TableCell sx={{ color: "#fff", fontWeight: 700 }}>Branch</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: 700 }}>Cutoff (MHT-CET Percentile)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>95.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mechanical Engineering</TableCell>
                      <TableCell>85.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Civil Engineering</TableCell>
                      <TableCell>80.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Electronics & Telecommunication</TableCell>
                      <TableCell>82.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Electrical Engineering</TableCell>
                      <TableCell>78.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Instructions for Filling the Admission Form
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Read the eligibility criteria carefully before applying." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Fill all details accurately as per your official documents." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Upload scanned copies of required documents (photo, signature, marksheets, etc.)." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Pay the application fee online using the available payment options." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Submit the form and take a printout for future reference." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="For any queries, contact the admission cell at info.dypcet@dypgroup.edu.in." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdmissionInfo;
