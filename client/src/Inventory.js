import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
// import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import InventoryFetch from './InventoryFetch';
import DefaultTheme from './DefaultTheme';


export default function Inventory() {
//   // Hard-coded items for back-end testing.
//   const inventoryData = [
//     {name: 'Hammer'},
//     {name: 'Shovel'},
//     {name: 'Square'},
//     {name: 'Tape Measure'},
//     {name: 'Screw Driver'},
//     {name: 'Socket Wrench'},
//   ];

  // API fetch for Hard-coded back-end testing.
  const { inventoryData } = InventoryFetch();

  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 0,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Immaculate Item Inventory
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Manage item inventory, add new items, update item status, and more!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Add New Item</Button>
              <Button variant="outlined">Update Inventory</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {inventoryData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography>
                        Qty: {card.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}