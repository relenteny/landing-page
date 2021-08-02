import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export const TextInput = withStyles({
    root: {
        borderRadius: '10px',
        border: '2px',
        borderStyle: 'solid',
        fontFamily: 'Raleway',
        fontSize: '24px',
        backgroundColor: 'white',
        borderColor: '252B69',
    }
})(TextField);
