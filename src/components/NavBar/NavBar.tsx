import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                
                <Typography variant="h6" color="inherit" component="div">
                    Quiz App
                </Typography>
            </Toolbar>
        </AppBar>

    )
}
