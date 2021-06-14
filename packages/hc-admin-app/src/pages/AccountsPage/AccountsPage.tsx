import { AccountRulesTable, RulesFilter } from '../../components';
import { Divider, FormControl, InputLabel, MenuItem, Select, makeStyles } from '@material-ui/core';
import { Filter, accountFilterUpdated, accountSelected } from '../../store/ui';
import { Rule, disableRules, ruleSelector } from '../../store/rule';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { PageHeader } from '@configer/ui-components';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
  },
  selectControl: {
    marginTop: theme.spacing(2),
    minWidth: '200px',
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export const AccountsPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [selectedAccId, setSelectedAccId] = useState('');

  const accountIds = useAppSelector(ruleSelector.accountIds);
  const availableServices = useAppSelector(ruleSelector.accountServices);
  const filteredRules = useAppSelector(ruleSelector.accountFilteredRules);

  useEffect(() => {
    if (accountIds.length > 0) {
      setSelectedAccId(accountIds[0]);
    }
  }, [JSON.stringify(accountIds)]);

  useEffect(() => {
    dispatch(accountSelected(selectedAccId));
  }, [selectedAccId]);

  const handleSelectAccount = (event: React.ChangeEvent<any>) => {
    setSelectedAccId(event.target.value as string);
  };

  const handleFilterChange = (filter: Filter) => {
    dispatch(accountFilterUpdated(filter));
  };

  const handleDisableRules = (rules: Rule[]) => {
    dispatch(disableRules({ accountId: selectedAccId, rules }));
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Config Master | Accounts</title>
      </Helmet>
      <PageHeader title="Accounts" />
      <FormControl variant="filled" className={classes.selectControl}>
        <InputLabel id="account-label">Account</InputLabel>
        <Select labelId="account-label" value={selectedAccId} onChange={handleSelectAccount}>
          {accountIds.map((id) => (
            <MenuItem value={id} key={id}>
              {id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider className={classes.divider} />
      <RulesFilter accountId={selectedAccId} onChange={handleFilterChange} services={availableServices} />
      <AccountRulesTable rules={filteredRules} accountId={selectedAccId} onDisable={handleDisableRules} />
    </div>
  );
};
