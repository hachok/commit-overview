import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';

import Header from 'src/components/Header/Header';
import CommitsListPage from 'src/pages/CommitsListPage/CommitsListPage';
import CommitDetailsPage from 'src/pages/CommitDetailsPage/CommitDetailsPage';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Header/>
            <main>
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={4}>
                        <Switch>
                            <Route exact path="/" component={CommitsListPage}/>
                            <Route exact path="/commit/:id" component={CommitDetailsPage}/>
                            <Redirect path="*" to="/"/>
                        </Switch>
                    </Grid>
                </Container>
            </main>
        </Router>
    );
}

export default App;
