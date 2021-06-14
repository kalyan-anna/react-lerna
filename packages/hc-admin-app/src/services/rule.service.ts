import account12345 from './acc-rule-12345';
import account67891 from './acc-rule-67891';
import masterData from './master-config-temp';

const loadRules = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        masterConfig: {
          ...masterData,
        },
        accounts: [
          {
            accountId: '12345',
            raw: { ...account12345 },
          },
          {
            accountId: '67891',
            raw: { ...account67891 },
          },
        ],
      });
    }, 2000);
  });
};

const uploadRule = (accountId: string, raw: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('accountId:', accountId, '...raw:', raw);
      resolve({});
    }, 2000);
  });
};

export const ruleService = {
  loadRules,
  uploadRule,
};
