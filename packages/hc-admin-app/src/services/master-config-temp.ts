/* eslint-disable sonarjs/no-duplicate-string */
export default {
  'hc-services': {
    nativeRules: [],
    customRules: [
      {
        ruleName: 'hc-ec2-c100-instances-ami-public-visibility',
        ruleProperties: {
          policyFile: 'hc-ec2-c100-instances-ami-public-visibility.rego',
          resourceType: 'AWS::EC2::Instance',
          inventoryFile: 'ec2-images.json',
          checkType: 'ec2-c100-public-visibility',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
      {
        ruleName: 'hc-ec2-c101-volumes-encrypted',
        ruleProperties: {
          policyFile: 'hc-ec2-c101-volumes-encrypted.rego',
          resourceType: 'AWS::EC2::Instance',
          inventoryFile: 'ec2-volumes.json',
          checkType: 'ec2-c101-volumes-encrypted',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
      {
        ruleName: 'hc-ec2-c102-elb-access-logs-enabled',
        ruleProperties: {
          policyFile: 'hc-ec2-c102-elb-access-logs-enabled.rego',
          inventoryFile: 'ec2-lbs.json',
          checkType: 'ec2-c102-elb-access-logs-enabled',
          resourceType: 'AWS::ElasticLoadBalancingV2::LoadBalancer',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
      {
        ruleName: 'hc-ec2-c103-managed-by-systems-manager',
        ruleProperties: {
          policyFile: 'hc-ec2-c103-managed-by-systems-manager.rego',
          inventoryFile: 'ec2-instances.json',
          checkType: 'ec2-c103-managed-by-systems-manager',
          resourceType: 'AWS::EC2::Instance',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
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
      {
        ruleName: 'hc-s3-c102-bucket-public-access-blocked',
        ruleProperties: {
          policyFile: 'hc-s3-c102-bucket-public-access-blocked.rego',
          inventoryFile: 's3.json',
          checkType: 's3-c102-bucket-public-access-blocked',
          resourceType: 'AWS::S3::Bucket',
          includeHCIgnoreTaggedResources: 'False',
        },
      },
    ],

    deleteRulesData: [
      { ruleName: 'hc-ec2-c100-instances-ami-public-visibility' },
      { ruleName: 'hc-ec2-c101-volumes-encrypted' },
      { ruleName: 'hc-ec2-c102-elb-access-logs-enabled' },
      { ruleName: 'hc-ec2-c103-managed-by-systems-manager' },
      { ruleName: 'hc-s3-c100-bucket-lifecycle-disabled' },
      { ruleName: 'hc-s3-c101-bucket-versioning-enabled' },
      { ruleName: 'hc-s3-c102-bucket-public-access-blocked' },
      { ruleName: 'hc-s3-c103-bucket-logging-enabled' },
      { ruleName: 'hc-glue-c100-table-account' },
      { ruleName: 'hc-glue-c102-table-classification' },
      { ruleName: 'hc-glue-c110-job-security' },
      { ruleName: 'hc-glue-c109-crawler-security' },
      { ruleName: 'hc-glue-c105-connector-db-access-secret-manager' },
      { ruleName: 'hc-glue-c104-connector-ssl' },
      { ruleName: 'hc-glue-c103-connector-type' },
      { ruleName: 'hc-emr-c100-block-public-access' },
      { ruleName: 'hc-emr-c107-cluster-use-glue-catlog' },
      { ruleName: 'hc-emr-c110-cluster-logging' },
      { ruleName: 'hc-redshift-c102-cross-region-snapshot' },
      { ruleName: 'hc-redshift-c103-cluster-relocation.rego' },
      { ruleName: 'hc-redshift-c104-snapshot-retention' },
      { ruleName: 'hc-redshift-c105-maintenance' },
      { ruleName: 'hc-redshift-c106-vpc' },
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
    opaBucketKey: 'policy/opa',
    archiveBucketKey: 'inventory/archive/',
    policyBucketKey: 'policy/',
    scannerBucketKey: 'scanner/',
    inventoryCollection: {
      inventoryServices: ['ec2-images', 'ec2-instances', 'ec2-volumes', 'ec2-lbs', 's3', 'glue', 'emr', 'redshift'],
      includeTaggedResources: 'False',
      includedTags: { HC_Ignore: 'True' },
    },
  },
};