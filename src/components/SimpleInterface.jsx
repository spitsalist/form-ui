import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box, Paper, Container } from '@mui/material';

const SimpleInterface = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Simple App</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{displey: 'flex', flexDirection: 'column', gap: 2,}}>
        <Paper>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" fontSize={{xs: 16, sm: 20}} >Enter Your Details</Typography>
        <TextField
          variant='outlined'
          label='Name'
          fullWidth
          margin='normal'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='Email'
          fullWidth
          margin='normal'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
        fullWidth
          type='submit'
          variant='contained'
          color='primary'
          disabled={!name || !email}
        >
          Submit
        </Button>
      </form>
      </Paper>
      

      {submitted && (
        <Box>
            <Paper elevation={3} sx={{padding: 2}}>
          <Typography variant="h5">Submitted Details:</Typography>
          <Typography>Name: {submitted.name}</Typography>
          <Typography>Email: {submitted.email}</Typography>
        </Paper>
        </Box>
      )}
      
    </Container>    

    </Box>
  );
};

export default SimpleInterface;