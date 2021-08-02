import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core';
import styles from './App.module.css';
import SignUp from './component/SignUp/SignUp';
import LandingPage from './component/LandingPage/LandingPage';

function App() {
    return (
        <Container className={styles.App} disableGutters={true} maxWidth={false}>
            <Router>
                <Switch>
                    <Route path={'/sign-up'} component={SignUp}></Route>
                    <Route path={'/'} component={LandingPage}></Route>
                </Switch>
            </Router>
            <CssBaseline/>
        </Container>
    );
}

export default App;
