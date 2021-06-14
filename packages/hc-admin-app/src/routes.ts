import { AccountsPage, MasterConfigPage } from './pages';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

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
