import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import DefaultTheme from './DefaultTheme';

export default function Navbar() {
  return (
    <ThemeProvider theme={DefaultTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    <Box display="flex" flexGrow={1}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="root"
                        sx={{ mr: 2 }}
                        component={Link} to={`/`}
                    >
                        <PostAddIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            I3 Solutions
                        </Typography>
                    </IconButton>
                    </Box>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="root"
                        sx={{ mr: 2 }}
                        component={Link} to={`/Login`}
                    >
                        <LoginIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            Login
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  );
}