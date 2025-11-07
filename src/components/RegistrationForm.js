import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function RegistrationForm({ open, onClose, form, onChange, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Student Registration</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            margin="dense"
            label="Full Name"
            name="name"
            fullWidth
            required
            value={form.name}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Date of Birth"
            name="dob"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            value={form.dob || ''}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Gender"
            name="gender"
            select
            fullWidth
            required
            value={form.gender || ''}
            onChange={onChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            label="Contact Number"
            name="mobile"
            type="tel"
            fullWidth
            required
            value={form.mobile}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            value={form.email}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Address"
            name="address"
            fullWidth
            required
            value={form.address || ''}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Course Applying For"
            name="course"
            fullWidth
            required
            value={form.course}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Last Qualification & Percentage"
            name="qualification"
            fullWidth
            required
            value={form.qualification || ''}
            onChange={onChange}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2 }}
          >
            Upload Photo
            <input
              type="file"
              name="photo"
              accept="image/*"
              hidden
              onChange={onChange}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" sx={{ background: '#1746a2', color: '#fff' }}>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default RegistrationForm;
