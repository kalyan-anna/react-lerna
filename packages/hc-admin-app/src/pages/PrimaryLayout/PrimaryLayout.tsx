import { Backdrop, makeStyles } from '@material-ui/core';
import { Header, SideNav } from '@hardened/ui-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loadRules, ruleSelector } from '../../store/rule';
import { useAppDispatch, useAppSelector } from '../../store';

import { CircularProgress } from '@material-ui/core';
import { Routes } from '../../routes';
import { appSelector } from '../../store/app';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '5px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 2,
    color: theme.palette.primary.main,
  },
}));

export const PrimaryLayout = () => {
  const classes = useStyles();
  const isAppBusy = useAppSelector(appSelector.isAppBusy);
  const dispatch = useAppDispatch();
  const rulesLoaded = useAppSelector(ruleSelector.rulesLoaded);

  useEffect(() => {
    dispatch(loadRules());
  }, []);

  return (
    <>
      <Backdrop open={isAppBusy} className={classes.backdrop}>
        <CircularProgress color="primary" size={55} thickness={4.5} />
      </Backdrop>
      <Header />
      <div className={classes.root}>
        <SideNav routes={Routes} disabled={!rulesLoaded} />
        <main className={classes.content}>
          <Switch>
            {Routes.map((route) => {
              const PageComponent = route.component;
              return (
                <Route path={route.path} key={route.path}>
                  {<PageComponent />}
                </Route>
              );
            })}
            <Route path="/">
              <Redirect to="/aws-config" />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};
