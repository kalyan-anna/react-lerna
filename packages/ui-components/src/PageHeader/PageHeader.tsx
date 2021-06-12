import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: '10px 0',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 700,
    letterSpacing: '1px',
    margin: 0,
  },
}));

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};
