import { makeStyles } from '@material-ui/core';
var useStyles = makeStyles({
    '@global': {
        fieldset: {
            border: 0,
        },
    },
});
export var GlobalStyles = function () {
    useStyles();
    // eslint-disable-next-line unicorn/no-null
    return null;
};
