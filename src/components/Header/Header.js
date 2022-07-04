import * as React from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Link to='/viajes'>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Fletes
                            </Typography>
                        </Link>
                        <Link to='/clientes'>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Clientes
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }

export default Header