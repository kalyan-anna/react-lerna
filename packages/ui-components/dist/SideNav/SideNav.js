var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
var drawerWidth = 240;
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: (_a = {
                width: drawerWidth,
                paddingTop: '50px'
            },
            _a[theme.breakpoints.up('sm')] = {
                paddingTop: '65px',
            },
            _a),
        drawerContainer: {
            overflow: 'auto',
        },
        navItemSelected: {
            color: "" + theme.palette.primary.main,
            '& svg': {
                color: "" + theme.palette.primary.main,
            },
        },
        navItemText: {
            fontWeight: 500,
        },
        navItemIcon: {
            color: grey[800],
        },
    });
});
export var SideNav = function (_a) {
    var routes = _a.routes, disabled = _a.disabled;
    var classes = useStyles();
    var renderNavItems = function () {
        return (_jsx(_Fragment, { children: routes.map(function (route) {
                var Icon = route.icon;
                return (_jsxs(ListItem, __assign({ button: true, component: NavLink, to: route.path, activeClassName: "Mui-selected " + classes.navItemSelected, disabled: disabled }, { children: [_jsx(ListItemIcon, __assign({ className: classes.navItemIcon }, { children: _jsx(Icon, {}, void 0) }), void 0),
                        _jsx(ListItemText, { primary: route.label, primaryTypographyProps: { className: classes.navItemText } }, void 0)] }), route.path));
            }) }, void 0));
    };
    return (_jsx(Drawer, __assign({ className: classes.drawer, variant: "permanent", classes: {
            paper: classes.drawerPaper,
        } }, { children: _jsx("div", __assign({ className: classes.drawerContainer }, { children: _jsx(List, __assign({ component: "nav" }, { children: renderNavItems() }), void 0) }), void 0) }), void 0));
};
