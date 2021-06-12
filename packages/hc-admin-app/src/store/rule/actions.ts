import { Rule, RuleState } from './slice';

import { RootState } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ruleService } from '../../services';

export const loadRules = createAsyncThunk('rule/loadRules', async () => {
  return await ruleService.loadRules();
});

export const disableRules = createAsyncThunk<Promise<any>, { accountId: string; rules: Rule[] }, { state: RootState }>(
  'rule/disableRules',
  async ({ accountId, rules }, thunkApi) => {
    const ruleState = thunkApi.getState().rule;
    const raw = ruleState.accounts[accountId].raw;
    await ruleService.uploadRule(accountId, raw);
    return { accountId, rules };
  },
) as any;

const bulkUpload = async (ruleState: RuleState, accountIds: string[]) => {
  const promises = [];
  for (const accountId of accountIds) {
    const payload = ruleState.accounts[accountId].raw;
    const promise = ruleService.uploadRule(accountId, payload);
    promises.push(promise);
  }
  return await Promise.all(promises);
};

export const bulkDisableRules = createAsyncThunk<
  Promise<any>,
  { accountIds: string[]; rules: Rule[] },
  { state: RootState }
>('rule/bulkDisableRules', async ({ accountIds }, thunkApi) => {
  return await bulkUpload(thunkApi.getState().rule, accountIds);
}) as any;

export const bulkEnableRules = createAsyncThunk<
  Promise<any>,
  { accountIds: string[]; rules: Rule[] },
  { state: RootState }
>('rule/bulkDisableRules', async ({ accountIds }, thunkApi) => {
  return await bulkUpload(thunkApi.getState().rule, accountIds);
}) as any;
