import { Box, Button, makeStyles } from '@material-ui/core';

import { AppLogo } from '../AppLogo/AppLogo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
    height: '65px',
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box
      component="header"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      boxShadow={1}
      className={classes.root}
      px={1}
    >
      <AppLogo />
      <Button color="primary" variant="contained">
        Login
      </Button>
    </Box>
  );
};

export { Header };
