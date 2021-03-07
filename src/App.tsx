import React from 'react';
import {AppBar, Container, CssBaseline, Grid, makeStyles, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Commit overview
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}

export default App;
