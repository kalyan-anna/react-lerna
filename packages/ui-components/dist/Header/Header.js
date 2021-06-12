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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, makeStyles } from '@material-ui/core';
import { AppLogo } from '../AppLogo/AppLogo';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.palette.common.white,
        width: '100%',
        height: '65px',
        zIndex: theme.zIndex.drawer + 1,
        position: 'relative',
    },
}); });
var Header = function () {
    var classes = useStyles();
    return (_jsxs(Box, __assign({ component: "header", flexDirection: "row", alignItems: "center", justifyContent: "space-between", display: "flex", boxShadow: 1, className: classes.root, px: 1 }, { children: [_jsx(AppLogo, {}, void 0),
            _jsx(Button, __assign({ color: "primary", variant: "contained" }, { children: "Login" }), void 0)] }), void 0));
};
export { Header };
