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
import Link from '@mui/material/Link';
import { useParams } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import ItemFetch from './ItemFetch';
import DefaultTheme from './DefaultTheme';


export default function ItemDetails() {
  const { id } = useParams();
  // API fetch for back-end testing.
  const { itemData } = ItemFetch(id);
  console.log(`itemData: ${itemData}`);

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
            View, update, and delete item details here!
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
              <Grid item key={itemData.id} xs={12} sm={6} md={3}>
                <Link to={`/Items/${itemData.id}`} style={ {textDecoration: 'none'} }>
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
                      // image={itemData.Image} not implemented within knex migrations/seeds
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {itemData.ItemName}
                      </Typography>
                      <Typography>
                        {itemData.Description.length > 100 ? itemData.Description.slice(0,100) + '...' : itemData.Description}
                      </Typography>
                      <Typography>
                          Qty: {itemData.Quantity}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={`/ItemDetails/${itemData.id}`}>View | Edit</Button>
                      <Button size="small" color="secondary">Delete</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}