import { Box, makeStyles } from '@material-ui/core';
import { Filter, masterFilterUpdated } from '../../store/ui';
import { MasterRulesTable, RulesFilter } from '../../components';
import { Rule, bulkDisableRules, bulkEnableRules, ruleSelector } from '../../store/rule';
import { useAppDispatch, useAppSelector } from '../../store';

import { Helmet } from 'react-helmet';
import { PageHeader } from '@hardened/ui-components';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '800px',
  },
}));

export const MasterConfigPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const availableServices = useAppSelector(ruleSelector.masterServices);
  const rules = useAppSelector(ruleSelector.masterFilteredRules);
  const allAccountIds = useAppSelector(ruleSelector.accountIds);

  const handleFilterChange = (filter: Filter) => {
    dispatch(masterFilterUpdated(filter));
  };

  const handleBulkDisable = (selectedRules: Rule[]) => {
    dispatch(bulkDisableRules({ accountIds: allAccountIds, rules: selectedRules }));
  };

  const handleBulkEnable = (selectedRules: Rule[]) => {
    dispatch(bulkEnableRules({ accountIds: allAccountIds, rules: selectedRules }));
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Hardened Cloud | Master Config</title>
      </Helmet>
      <PageHeader title="Master config" />
      <Box mt={4} />
      <RulesFilter onChange={handleFilterChange} services={availableServices} />
      <MasterRulesTable
        rules={rules}
        onAction={() => {
          console.log('on action');
        }}
        onBulkDisable={handleBulkDisable}
        onBulkEnable={handleBulkEnable}
      />
    </div>
  );
};
