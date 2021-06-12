import { Button, Paper, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef, GridRowSelectedParams, GridSelectionModelChangeParams } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';

import { Rule } from '../../store/rule';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  toolbar: {
    padding: theme.spacing(1),
  },
}));

interface AccountRulesTableProps {
  rules: Rule[];
  accountId: string;
  onDisable: (rules: Rule[]) => void;
}

const columns: GridColDef[] = [
  { field: 'service', headerName: 'Service', width: 200 },
  { field: 'ruleName', headerName: 'Rule name', width: 550 },
  { field: 'rule', headerName: 'Rule object', width: 0, hide: true },
];

export const AccountRulesTable: React.FC<AccountRulesTableProps> = ({ rules, accountId, onDisable }) => {
  const classes = useStyles();
  const [selectedRules, setSelectedRules] = useState([] as Rule[]);

  const rows = rules.map((rule) => ({
    ruleName: rule.ruleName,
    id: `${accountId}-${rule.ruleName}`,
    service: rule.service,
    rule: rule,
  }));

  useEffect(() => {
    setSelectedRules([]);
  }, [accountId]);

  const handleRowSelection = (param: GridRowSelectedParams) => {
    const rows = param.api.current.getSelectedRows();
    setSelectedRules([...rows.values()].map((row) => row.rule as Rule));
  };

  const handleDisable = () => {
    onDisable(selectedRules);
  };

  const handleSelectionModelChange = (param: GridSelectionModelChangeParams) => {
    const rules = param.selectionModel.map((id) => rows.find((row) => row.id === id)?.rule) as Rule[];
    setSelectedRules(rules);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.toolbar} square={true}>
        <Button variant="outlined" color="primary" disabled={selectedRules.length === 0} onClick={handleDisable}>
          Disable
        </Button>
      </Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnMenu={true}
        autoHeight={true}
        showCellRightBorder={true}
        showColumnRightBorder={true}
        disableExtendRowFullWidth={true}
        onRowSelected={handleRowSelection}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        hideFooterRowCount={true}
        onSelectionModelChange={handleSelectionModelChange}
        disableSelectionOnClick={true}
      />
    </div>
  );
};
