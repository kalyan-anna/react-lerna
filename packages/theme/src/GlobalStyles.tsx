import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  '@global': {
    fieldset: {
      border: 0,
    },
  },
});

export const GlobalStyles = () => {
  useStyles();
  // eslint-disable-next-line unicorn/no-null
  return null;
};
