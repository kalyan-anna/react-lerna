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
import { jsx as _jsx } from "react/jsx-runtime";
import { makeStyles } from '@material-ui/core';
var useStyles = makeStyles(function () { return ({
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
}); });
export var PageHeader = function (_a) {
    var title = _a.title;
    var classes = useStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx("h1", __assign({ className: classes.title }, { children: title }), void 0) }), void 0));
};
