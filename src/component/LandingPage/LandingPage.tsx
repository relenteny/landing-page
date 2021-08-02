import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, withRouter } from 'react-router-dom'
import { ButtonLight } from '../Button/Button';
import clsx from 'clsx';

const elementStyle = {
    logo: {
        height: 'auto',
        maxWidth: '100%',
    },
    strong: {
        fontWeight: 900,
    }
}

const useStyles = makeStyles(theme => ({
    page: {
        backgroundImage: "url('../../image/landing-page/bg-dark.jpg')",
        height: '100vh',
    },
    form: {
        width: '800px',
    },
    title: {
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '40px',
        fontWeight: 'bold',
    },
    strongTitle: {
        fontWeight: 900,
    },
    pageButton: {
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '18px',
        fontWeight: 500,
    },
    formRow: {
        paddingTop: '30px',
        paddingBottom: '50px',
    },
    joinButton: {
        width: '200px',
    },
    signInButton: {
        marginLeft: '50px',
        width: '200px',
    }
}))

const LandingPage = () => {
    const classes = useStyles();
    const history = useHistory();

    return <Box display='flex' justifyContent='center' className={classes.page}>
        <Box display='flex' flexDirection='column' justifyContent='center' className={classes.form}>
            <Box display='flex' justifyContent='center'>
                <img src='image/landing-page/truth-logo.png' alt='' style={elementStyle.logo} />
            </Box>
            <Grid container className={classes.formRow}>
                <Grid item xs={12}>
                    <Box className={classes.title} component='span' display='inline'>Find your own</Box>
                    <Box className={clsx(classes.title, classes.strongTitle)} component="span" display="inline" pl={1}>TRUTH</Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} container justify='center'>
                    <ButtonLight className={classes.joinButton} onClick={() => history.push('/sign-up')}>Join Us</ButtonLight>
                </Grid>
            </Grid>
        </Box>
    </Box>
}

export default withRouter(LandingPage)