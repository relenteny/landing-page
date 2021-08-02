import React from 'react'
import { Box, Grid, makeStyles, withWidth, WithWidth } from '@material-ui/core'
import { ButtonLight } from '../Button/Button'
import { TextInput } from '../Input/Input'

var Recaptcha = require('react-recaptcha');

const elementStyle = {
    logo: {
        height: 'auto',
        maxWidth: '100%',
    },
    strong: {
        fontWeight: 900,
    },
    signinLink: {
        fontSize: '26px',
        fontWeight: 900,
        backgroundColor: 'transparent',
        '&a:visited': {
            textDecoration: 'none',
        }
    }
}

const useStyles = makeStyles(theme => ({
    page: {
        backgroundImage: "url('../../image/landing-page/bg-dark.jpg')",
        height: '100vh',
    },
    form: {
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            flexDirection: 'column',
        },
    },
    subtitle: {
        fontSize: '40px',
        color: 'white',
        fontWeight: 700,
        paddingBottom: '24px',
    },
    left: {
        width: '60%',
        paddingLeft: '40px',
        paddingRight: '40px',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
    },
    overview: {
        paddingLeft: '20px',
        paddingRight: '20px',
        fontSize: '16px',
        color: 'white',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
    },
    right: {
        width: '40%',
        paddingTop: '20vh',
        paddingLeft: '20px',
        paddingRight: '40px',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            paddingTop: '10px',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            paddingTop: '20px',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
    },
    textInput: {
        width: '100%',
        margin: '4px',
    },
    recaptcha: {
        paddingTop: '12px',
    },
    submit: {
        width: '200px',
    }
}))

const SignUp = (width:WithWidth) => {
    const classes = useStyles();
    const isSmallScreen = /xs/.test(width.width)
    const textEditSize = isSmallScreen ? 'small' : undefined

    return <Box display='flex' className={classes.page} alignItems='center' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' className={classes.form}>
            <Grid container className={classes.left}>
                <Grid item xs={12}>
                    <img src='image/landing-page/truth-logo.png' alt='' style={elementStyle.logo} />
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.subtitle}>Find your own <strong style={elementStyle.strong}>TRUTH</strong></Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display='flex' className={classes.overview} justifyContent='center'>
                        Overview copy goes here
                    </Box>
                </Grid>
            </Grid>
            <Box display='flex' flexDirection='column' className={classes.right}>
                <form>
                    <Box display='flex'>
                        <Box display='flex' flexGrow={1} justifyContent='center'>
                            <TextInput variant='outlined' placeholder='First Name' size={textEditSize} className={classes.textInput}></TextInput>
                        </Box>
                        <Box display='flex' flexGrow={1} justifyContent='center'>
                            <TextInput variant='outlined' placeholder='Last Name' size={textEditSize} className={classes.textInput}></TextInput>
                        </Box>
                    </Box>
                    <Box display='flex' flexGrow={1} alignItems='stretch'>
                        <TextInput variant='outlined' placeholder='Email' size={textEditSize} className={classes.textInput}></TextInput>
                    </Box>
                    <Box display='flex' flexGrow={1} justifyContent='center' className={classes.recaptcha}>
                        <Recaptcha
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        />
                    </Box>
                    <Box display='flex' flexGrow={1} justifyContent='center'>
                        <ButtonLight className={classes.submit}>Submit</ButtonLight>
                    </Box>
                </form>
            </Box>
        </Box>
    </Box>
}

export default withWidth()(SignUp)