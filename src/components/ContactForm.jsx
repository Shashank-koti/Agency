import React, { useState } from 'react';
import {
  Box, Paper, Typography, IconButton, TextField,
  Button, InputAdornment
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    time: null,
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleDateChange = (value) => {
    handleChange('date', dayjs(value).isValid() ? value : null);
  };

  const handleTimeChange = (value) => {
    handleChange('time', dayjs(value).isValid() ? value : null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3) newErrors.name = 'Min 3 characters';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.time) newErrors.time = 'Required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbx5qT0xxiz4TigGK2Ex2tpMPq6V6Jcce0alnVtrQ_vtoPkF2MGR5vfRW8pqa8sd4zdO/exec';

      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('date', formData.date.format('YYYY-MM-DD'));
      form.append('time', formData.time.format('HH:mm'));
      form.append('notes', formData.notes);

      fetch(scriptURL, { method: 'POST', body: form })
        .then(response => {
          alert('Meeting booked!');
          setFormData({ name: '', email: '', date: null, time: null, notes: '' });
          onClose();
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert('Failed to book meeting. Please try again.');
        });
    }
  };

  const inputStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    color: '#fff',
  };
  const labelStyles = { color: '#ccc' };
  const iconColor = 'gray';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          width: '100%',
          height: '100vh',
          bgcolor: 'rgba(0,0,0,0.95)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            width: '100%',
            maxWidth: 600,
            position: 'relative',
            backgroundColor: '#121212',
          }}
          elevation={6}
        >
          <IconButton sx={{ position: 'absolute', top: 5, right: 8, color: '#fff' }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom align="center">Book a Meeting</Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: iconColor }} /></InputAdornment>,
                sx: inputStyles,
              }}
              InputLabelProps={{ sx: labelStyles }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: iconColor }} /></InputAdornment>,
                sx: inputStyles,
              }}
              InputLabelProps={{ sx: labelStyles }}
            />
            <DatePicker
              label="Date"
              value={formData.date}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  name: 'date',
                  fullWidth: true,
                  margin: 'normal',
                  error: !!errors.date,
                  helperText: errors.date,
                  InputProps: {
                    startAdornment: <InputAdornment position="start"><CalendarTodayIcon sx={{ color: iconColor }} /></InputAdornment>,
                    sx: inputStyles,
                  },
                  InputLabelProps: { sx: labelStyles },
                },
              }}
            />
            <TimePicker
              label="Time"
              value={formData.time}
              onChange={handleTimeChange}
              slotProps={{
                textField: {
                  name: 'time',
                  fullWidth: true,
                  margin: 'normal',
                  error: !!errors.time,
                  helperText: errors.time,
                  InputProps: {
                    startAdornment: <InputAdornment position="start"><AccessTimeIcon sx={{ color: iconColor }} /></InputAdornment>,
                    sx: inputStyles,
                  },
                  InputLabelProps: { sx: labelStyles },
                },
              }}
            />
            <TextField
              name="notes"
              label="Notes"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><NotesIcon sx={{ color: iconColor }} /></InputAdornment>,
                sx: inputStyles,
              }}
              InputLabelProps={{ sx: labelStyles }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2, fontWeight: 'bold', textTransform: 'none', borderRadius: 2, py: 1.5 }}
            >
              Book Meeting
            </Button>
          </form>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}
