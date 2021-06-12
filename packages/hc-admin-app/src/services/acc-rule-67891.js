export default {
  'hc-services': {
    nativeRules: [
      {
        ruleName: 'hc-iam-n100-root-account-mfa-enabled',
      },
      {
        ruleName: 'hc-iam-n101-root-access-key-check',
      },
      {
        ruleName: 'hc-iam-n102-user-mfa-enabled',
      },
      {
        ruleName: 'hc-s3-n100-bucket-public-read-prohibited',
      },
    ],
    customRules: [
      {
        ruleName: 'hc-s3-c100-bucket-lifecycle-disabled',
        ruleProperties: {
          policyFile: 'hc-s3-c100-bucket-lifecycle-disabled.rego',
          inventoryFile: 's3.json',
          checkType: 's3-c100-bucket-lifecycle-disabled',
          resourceType: 'AWS::S3::Bucket',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
      {
        ruleName: 'hc-s3-c101-bucket-versioning-enabled',
        ruleProperties: {
          policyFile: 'hc-s3-c101-bucket-versioning-enabled.rego',
          inventoryFile: 's3.json',
          checkType: 's3-c101-bucket-versioning-enabled',
          resourceType: 'AWS::S3::Bucket',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
    ],
    deleteRulesData: [
      { ruleName: 'hc-s3-c100-bucket-lifecycle-disabled' },
      { ruleName: 'hc-s3-c101-bucket-versioning-enabled' },
      { ruleName: 'hc-s3-c102-bucket-public-access-blocked' },
      { ruleName: 'hc-s3-c103-bucket-logging-enabled' },
      { ruleName: 'hc-emr-c100-cluster-logging' },
      { ruleName: 'hc-emr-c101-launch-mode' },
      { ruleName: 'hc-emr-c102-cluster-instance-type' },
      { ruleName: 'hc-emr-c103-cluster-min-instances' },
      { ruleName: 'hc-emr-c104-cluster-scaling' },
      { ruleName: 'hc-emr-c105-cluster-release' },
      { ruleName: 'hc-emr-c106-cluster-apps' },
      { ruleName: 'hc-emr-c107-cluster-use-glue-catalog' },
      { ruleName: 'hc-emr-c109-security-config' },
      { ruleName: 'hc-emr-c110-block-public-access' },
      { ruleName: 'hc-glue-c101-table-source-type' },
      { ruleName: 'hc-glue-c102-table-classification' },
      { ruleName: 'hc-glue-c103-connector-type' },
      { ruleName: 'hc-glue-c104-connector-ssl' },
      { ruleName: 'hc-glue-c105-connector-db-access-secret-manager' },
      { ruleName: 'hc-glue-c106-classifier-type' },
      { ruleName: 'hc-glue-c107-catalog-encryption' },
      { ruleName: 'hc-glue-c108-security-configuration' },
      { ruleName: 'hc-glue-c109-crawler-security' },
      { ruleName: 'hc-glue-c110-job-security' },
    ],
    emailIntegration: {
      enabled: false,
    },
    jiraIntegration: {
      enabled: false,
      jiraURL: 'https://jira.mydomain.com.au/rest/api/2/issue',
      epic: 'TS-1473',
      projectKey: 'TS',
      issueType: 'Bug',
      priorityName: 'Lowest',
      labels: 'HardenedCloud-BAU-2020',
      environment: 'Dev2',
      fixVersions: 'TBD (used by Automation only)',
      epicURL: 'https://jira.mydomain.com.au/rest/agile/1.0/epic/',
    },
    cloudProvider: 'AWS',
    accounts: [
      {
        accountId: 'XXXXXXXXXXXX',
        InventoryBucketName: 'hardenedcloud-XXXXXXXXXXXX',
        PolicyBucketName: 'hardenedcloud-myaccount-alias-1',
      },
      {
        accountId: 'XXXXXXXXXXX2',
        InventoryBucketName: 'hardenedcloud-cds-master',
        PolicyBucketName: 'hardenedcloud-myaccount-alias-2',
      },
    ],
    inventoryBucketKey: 'inventory/',
    archiveBucketKey: 'inventory/archive/',
    policyBucketKey: 'policy/',
    opaBucketKey: 'policy/opa',
    scannerBucketKey: 'scanner/',
    inventoryCollection: {
      inventoryServices: ['s3', 'redshift', 'glue', 'emr'],
      includeTaggedResources: 'False',
      includedTags: { HC_Ignore: 'True' },
    },
  },
};
