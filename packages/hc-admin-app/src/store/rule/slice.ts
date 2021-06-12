import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { bulkDisableRules, bulkEnableRules, disableRules, loadRules } from './actions';

export interface Rule {
  ruleName: string;
  ruleProperties: {
    includeHCIgnoreTaggedResources: 'False' | 'True';
  };
  service: string;
  type: string;
}

export interface RuleGroup {
  nativeRules: Rule[];
  customeRules: Rule[];
}

export interface RuleState {
  rulesLoaded: boolean;
  accounts: {
    [accountId: string]: {
      accountId: string;
      raw: any;
      rules: RuleGroup;
    };
  };
  masterConfig: {
    raw: any;
    rules: RuleGroup;
  };
}

const initialState: RuleState = {
  rulesLoaded: false,
  accounts: {},
  masterConfig: {
    raw: {},
    rules: {
      nativeRules: [],
      customeRules: [],
    },
  },
};

const parseRule = (raw: string): RuleGroup => {
  return {
    customeRules: raw['hc-services'].customRules.map(
      (rule: any) =>
        ({
          ruleName: rule.ruleName,
          ruleProperties: {
            includeHCIgnoreTaggedResources: rule.ruleProperties.includeHCIgnoreTaggedResources,
          },
          service: rule.ruleName.split('-')[1],
          type: 'customRules',
        } as Rule),
    ),
    nativeRules: raw['hc-services'].nativeRules.map((rule: any) => ({
      ruleName: rule.ruleName,
      service: rule.ruleName.split('-')[1],
      type: 'nativeRules',
    })),
  } as RuleGroup;
};

const loadRulesAction = (state: RuleState, { payload }: PayloadAction<any>) => {
  const { masterConfig: masterConfigInput, accounts: accountsInput } = payload;

  const accountsRuleParsed = accountsInput.map((account: any) => {
    return {
      ...account,
      rules: parseRule(account.raw),
    } as unknown;
  });

  state.accounts = accountsRuleParsed.reduce((acc: RuleState['accounts'], account: any) => {
    acc[account.accountId] = {
      ...account,
    };
    return acc;
  }, {});

  state.masterConfig = {
    raw: masterConfigInput,
    rules: parseRule(masterConfigInput),
  };

  state.rulesLoaded = true;
};

const disableRulesByAccountId = (state: RuleState, accountId: string, rules: Rule[]) => {
  const rawObj = state.accounts[accountId].raw;

  for (const rule of rules) {
    const index = rawObj['hc-services'][rule.type].findIndex((item: any) => item.ruleName === rule.ruleName);
    if (index !== -1) {
      rawObj['hc-services'][rule.type].splice(index, 1);
    }
  }

  state.accounts[accountId].rules = parseRule(rawObj);
};

const disableRulesAction = (state: RuleState, { meta }: PayloadAction<any, any, any>) => {
  const { accountId, rules } = meta.arg;
  disableRulesByAccountId(state, accountId, rules);
};

const bulkDisableRulesAction = (state: RuleState, { meta }: PayloadAction<any, any, any>) => {
  const { accountIds, rules } = meta.arg;
  for (const accountId of accountIds) {
    disableRulesByAccountId(state, accountId, rules);
  }
};

const bulkEnableRulesAction = (state: RuleState, { meta }: PayloadAction<any, any, any>) => {
  const { accountIds, rules } = meta.arg;

  for (const accountId of accountIds) {
    const rawObj = state.accounts[accountId].raw;

    for (const rule of rules) {
      const index = rawObj['hc-services'][rule.type].findIndex((item: any) => item.ruleName === rule.ruleName);
      if (index === -1) {
        rawObj['hc-services'][rule.type].push(rule);
      }
    }

    state.accounts[accountId].rules = parseRule(rawObj);
  }
};

export const ruleSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {},
  extraReducers: {
    [loadRules.fulfilled.type]: loadRulesAction,
    [disableRules.pending.type]: disableRulesAction,
    [bulkDisableRules.pending.type]: bulkDisableRulesAction,
    [bulkEnableRules.pending.type]: bulkEnableRulesAction,
  },
});

export const ruleReducer = ruleSlice.reducer;
