import { FormControl, InputLabel, MenuItem, Paper, Select, TextField, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { Filter } from '../../store/ui';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'baseline',
    padding: theme.spacing(1),
    '& > *': {
      marginRight: theme.spacing(5),
    },
  },
  legend: {
    fontWeight: 500,
  },
  serviceSelect: {
    minWidth: '100px',
  },
  btnGroup: {
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
}));

interface RulesFilterProps {
  accountId?: string;
  onChange: (filter: Filter) => void;
  services: string[];
}

export const RulesFilter: React.FC<RulesFilterProps> = ({ accountId = '', onChange, services }) => {
  const classes = useStyles();
  const [selectedService, setSelectedService] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setSelectedService('');
    setKeyword('');
    onChange({} as Filter);
  }, [accountId]);

  const handleServiceChange = (event: React.ChangeEvent<any>) => {
    setSelectedService(event.target.value as string);
    onChange({
      services: (event.target.value && [event.target.value]) || [],
      keyword,
    });
  };

  const handleKeywordChange = (event: React.ChangeEvent<any>) => {
    setKeyword(event.target.value as string);
    onChange({
      services: (selectedService && [selectedService]) || [],
      keyword: event.target.value,
    });
  };

  return (
    <Paper role="group" aria-labelledby="filter-title" className={classes.root} elevation={0}>
      <div id="filter-title" className={classes.legend}>
        Filter by
      </div>
      <FormControl className={classes.serviceSelect}>
        <InputLabel id="select-service-label">Service</InputLabel>
        <Select labelId="select-service-label" value={selectedService} onChange={handleServiceChange}>
          {services.map((service: string) => (
            <MenuItem value={service} key={service}>
              {service}
            </MenuItem>
          ))}
          <MenuItem value="">select</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField id="standard-basic" label="Keyword" value={keyword} onChange={handleKeywordChange} />
      </FormControl>
    </Paper>
  );
};
