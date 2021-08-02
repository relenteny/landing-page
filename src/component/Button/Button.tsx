import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export const ButtonLight = withStyles({
    root: {
        background: '#17469e',
        borderRadius: '20px',
        border: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '24px',
        fontWeight: 600,
        padding: '4px 30px',
        margin: '20px',
        transition: 'background .25s ease',
        '&:hover': {
            backgroundColor: '#00AEEF',
        },
    },
    label: {
        textTransform: 'none'
    }
})(Button);

export const ButtonDark = withStyles({
    root: {
        background: '#252B69',
        borderRadius: '20px',
        border: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '24px',
        fontWeight: 600,
        padding: '4px 30px',
        margin: '20px',
        transition: 'background .25s ease',
        '&:hover': {
            backgroundColor: '#00AEEF',
        },
    },
    label: {
        textTransform: 'none'
    }
})(Button);
