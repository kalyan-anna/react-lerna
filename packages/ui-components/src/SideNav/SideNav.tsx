import { Drawer, List, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap, makeStyles } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: '50px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '65px',
    },
  },
  drawerContainer: {
    overflow: 'auto',
  },
  navItemSelected: {
    color: `${theme.palette.primary.main}`,
    '& svg': {
      color: `${theme.palette.primary.main}`,
    },
  },
  navItemText: {
    fontWeight: 500,
  },
  navItemIcon: {
    color: grey[800],
  },
}));

interface SideNavProps {
  routes: {
    path: string;
    label: string;
    icon: OverridableComponent<SvgIconTypeMap<any, 'svg'>>;
    component: () => JSX.Element;
    title: string;
  }[];
  disabled: boolean;
}

export const SideNav: React.FC<SideNavProps> = ({ routes, disabled }) => {
  const classes = useStyles();

  const renderNavItems = () => {
    return (
      <>
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <ListItem
              button
              key={route.path}
              component={NavLink}
              to={route.path}
              activeClassName={`Mui-selected ${classes.navItemSelected}`}
              disabled={disabled}
            >
              <ListItemIcon className={classes.navItemIcon}>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={route.label} primaryTypographyProps={{ className: classes.navItemText }} />
            </ListItem>
          );
        })}
      </>
    );
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <List component="nav">{renderNavItems()}</List>
      </div>
    </Drawer>
  );
};
