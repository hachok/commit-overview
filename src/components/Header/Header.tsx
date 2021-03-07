import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography} from '@material-ui/core';

const Header: React.FC = () => {
    return (
        <header>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Commit overview
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;