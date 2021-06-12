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
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            textDecoration: 'none',
        },
        logo: {
            width: '50px',
            height: '50px',
            marginLeft: '15px',
        },
        appTitle: (_a = {
                textTransform: 'uppercase',
                color: theme.palette.common.black,
                fontWeight: 600,
                fontSize: '1.2rem',
                textShadow: "1px 3px 0 " + theme.palette.primary.light + ", 1px 13px 5px #aba8a8",
                fontStyle: 'oblique'
            },
            _a[theme.breakpoints.up('sm')] = {
                marginLeft: '10px',
                fontSize: '1.5rem',
            },
            _a),
    });
});
export var AppLogo = function () {
    var classes = useStyles();
    return (_jsx("a", __assign({ href: "/", className: classes.root }, { children: _jsxs(Box, __assign({ flexDirection: "row", alignItems: "center", display: "flex" }, { children: [_jsx("img", { src: "PwC-logo.svg", className: classes.logo, alt: "Hardened Cloud App Logo" }, void 0),
                _jsx("span", __assign({ className: classes.appTitle }, { children: "Hardened Cloud" }), void 0)] }), void 0) }), void 0));
};
