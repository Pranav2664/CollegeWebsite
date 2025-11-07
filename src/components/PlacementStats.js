import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PlacementStats({ placementStats, ashish }) {
  return (
    <Box sx={{ mt: 6, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1746a2' }}>
        Placement Statistics
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
        mb: 4
      }}>
        <Box sx={{
          bgcolor: '#e3f2fd',
          borderRadius: 2,
          p: 3,
          minWidth: 220,
          textAlign: 'center',
          boxShadow: 2
        }}>
          <Typography variant="h6" sx={{ color: '#1746a2', fontWeight: 700 }}>Students Placed</Typography>
          <Typography variant="h4" sx={{ color: '#1746a2', fontWeight: 900 }}>{placementStats.placed}</Typography>
        </Box>
        <Box sx={{
          bgcolor: '#fffde7',
          borderRadius: 2,
          p: 3,
          minWidth: 220,
          textAlign: 'center',
          boxShadow: 2
        }}>
          <Typography variant="h6" sx={{ color: '#ffb300', fontWeight: 700 }}>Internships</Typography>
          <Typography variant="h4" sx={{ color: '#ffb300', fontWeight: 900 }}>{placementStats.internship}</Typography>
        </Box>
        <Box sx={{
          bgcolor: '#e8f5e9',
          borderRadius: 2,
          p: 3,
          minWidth: 220,
          textAlign: 'center',
          boxShadow: 2
        }}>
          <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 700 }}>Higher Education</Typography>
          <Typography variant="h4" sx={{ color: '#388e3c', fontWeight: 900 }}>{placementStats.higherEdu}</Typography>
        </Box>
      </Box>
      <Box sx={{
        bgcolor: '#fff3e0',
        borderRadius: 2,
        p: 3,
        minWidth: 320,
        textAlign: 'center',
        boxShadow: 2
      }}>
        <Typography variant="h6" sx={{ color: '#d84315', fontWeight: 700 }}>
          Highest Package
        </Typography>
        <Typography variant="h4" sx={{ color: '#d84315', fontWeight: 900 }}>
          {placementStats.highestPackage}
        </Typography>
      </Box>
    </Box>
  );
}

export default PlacementStats;
