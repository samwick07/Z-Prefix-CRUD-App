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
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import InventoryFetch from './InventoryFetch';
import DefaultTheme from './DefaultTheme';


export default function Inventory() {

  // API fetch for back-end testing.
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
              <Button href='/NewItem' variant="contained">Add New Item</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {inventoryData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Link to={`/Items/${card.id}`} style={ {textDecoration: 'none'} }>
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
                      // image={card.Image} not implemented within knex migrations/seeds
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.ItemName}
                      </Typography>
                      <Typography>
                        {card.Description.length > 100 ? card.Description.slice(0,100) + '...' : card.Description}
                      </Typography>
                      <Typography>
                          Qty: {card.Quantity}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={`/UpdateItem/${card.id}`}>View | Edit</Button>
                      <Button size="small" color="secondary">Delete</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}