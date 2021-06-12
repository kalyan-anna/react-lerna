import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginLeft: '15px',
  },
  appTitle: {
    textTransform: 'uppercase',
    color: theme.palette.common.black,
    fontWeight: 600,
    fontSize: '1.2rem',
    textShadow: `1px 3px 0 ${theme.palette.primary.light}, 1px 13px 5px #aba8a8`,
    fontStyle: 'oblique',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '10px',
      fontSize: '1.5rem',
    },
  },
}));

export const AppLogo = () => {
  const classes = useStyles();

  return (
    <a href="/" className={classes.root}>
      <Box flexDirection="row" alignItems="center" display="flex">
        <img src="PwC-logo.svg" className={classes.logo} alt="Hardened Cloud App Logo" />
        <span className={classes.appTitle}>Hardened Cloud</span>
      </Box>
    </a>
  );
};
