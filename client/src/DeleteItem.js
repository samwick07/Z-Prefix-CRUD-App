import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './DefaultTheme';
import { useParams } from "react-router-dom";


export default function UpdateItem() {
  const { id } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/DeleteItem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }})
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <DeleteIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Confirm deletion of Item {id}?
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Delete Item
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}