import { AccountsPage, MasterConfigPage } from './pages';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

// TODO: Create a @hardened/types package and create a IRoute type

export const Routes = [
  {
    path: '/accounts',
    label: 'Accounts',
    title: 'Accounts',
    component: AccountsPage,
    icon: AccountBalanceIcon,
  },
  {
    path: '/master-config',
    label: 'Master Config',
    title: 'Master config',
    component: MasterConfigPage,
    icon: PermDataSettingIcon,
  },
];
