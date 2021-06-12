import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react';
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
export declare const SideNav: React.FC<SideNavProps>;
export {};
//# sourceMappingURL=SideNav.d.ts.map