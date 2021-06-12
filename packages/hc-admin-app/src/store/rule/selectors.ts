import { Filter, uiSelectors } from '../ui';
import { Rule, RuleState } from './slice';

import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectRuleState = (state: RootState) => state.rule;
const selectAccounts = createSelector(selectRuleState, (state) => state.accounts);
const selectMasterConfig = createSelector(selectRuleState, (state) => state.masterConfig);

const accountIds = createSelector(selectAccounts, (accounts) => Object.keys(accounts));

const getRulesByAccountId = (accounts: RuleState['accounts'], accountId: string) => {
  if (!accountId || !accounts[accountId]) {
    return [];
  }
  const { nativeRules, customeRules } = accounts[accountId].rules;
  return [...nativeRules, ...customeRules];
};

const applyFilter = (rules: Rule[], filter: Filter) => {
  return rules
    .filter((rule) => !filter.services || !filter.services.length || filter.services.includes(rule.service))
    .filter((rule) => !filter.keyword || rule.ruleName.includes(filter.keyword.toLowerCase().trim()));
};

const accountFilteredRules = createSelector(
  selectAccounts,
  uiSelectors.selectedAccountID,
  uiSelectors.accountFilter,
  (accounts, accountId, filter) => {
    const rules = getRulesByAccountId(accounts, accountId);
    return applyFilter(rules, filter);
  },
);

const accountServices = createSelector(selectAccounts, uiSelectors.selectedAccountID, (accounts, accountId) => {
  const rules = getRulesByAccountId(accounts, accountId);

  const services = new Set<string>();
  for (const rule of rules) {
    services.add(rule.service);
  }

  return [...services] as string[];
});

const rulesLoaded = createSelector(selectRuleState, (state) => state.rulesLoaded);

const masterFilteredRules = createSelector(selectMasterConfig, uiSelectors.masterFilter, (masterConfig, filter) => {
  const { nativeRules, customeRules } = masterConfig.rules;
  const rules = [...nativeRules, ...customeRules];
  return applyFilter(rules, filter);
});

const masterServices = createSelector(selectMasterConfig, (masterConfig) => {
  const { nativeRules, customeRules } = masterConfig.rules;
  const rules = [...nativeRules, ...customeRules];

  const services = new Set<string>();
  for (const rule of rules) {
    services.add(rule.service);
  }

  return [...services] as string[];
});

export const ruleSelector = {
  accountIds,
  accountFilteredRules,
  accountServices,
  rulesLoaded,
  masterFilteredRules,
  masterServices,
};
