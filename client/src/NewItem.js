import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './DefaultTheme';
import { Link } from 'react-router-dom';


export default function NewItem() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newItemPost = {
      UserId: data.get('UserId'),
      ItemName: data.get('ItemName'),
      Description: data.get('Description'),
      Quantity: data.get('Quantity')}
    console.log(newItemPost);

    fetch(`http://localhost:8080/NewItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItemPost)
      })
      .then((rawResponse) => {
        if (!rawResponse.ok) {
          throw new Error(
            `code: ${rawResponse.status}, status text: ${rawResponse.statusText}`
          );
        }
        return rawResponse.json();
      })
      .then((jsonifiedResponse) =>
        console.log("Jsonified data: ", jsonifiedResponse)
      )
      .catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Inventory Item
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ItemName"
                  id="ItemName"
                  label="Item Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Description"
                  id="Description"
                  label="Description"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="UserId"
                  id="UserId"
                  label="User ID"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Quantity"
                  id="Quantity"
                  label="Quantity"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add New Item
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}