import { getBucketData } from '../../services/config.service';
import { mockClient } from 'aws-sdk-client-mock';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { config } from '../../services/aws-config';

const LambdaClientMock = mockClient(LambdaClient);
const CognitoIdentityClientMock = mockClient(CognitoIdentityClient);

const mockBucketListData = (services: string) => [
  { Key: `test/12345/${services}/bucket1` },
  { Key: `test/12345/${services}/bucket2` },
  { Key: `test/22345/${services}/bucket3` },
];
const encoder = new TextEncoder();
const adminBucket = encoder.encode(
  JSON.stringify({
    body: JSON.stringify({
      Contents: 'bucket1',
    }),
  }),
);

const mockLambdaResponse = (listBucket: Uint8Array) => {
  LambdaClientMock.on(InvokeCommand, { Payload: JSON.stringify({ request: 'admin-bucket' }) })
    .resolves({
      Payload: adminBucket,
    })
    .on(InvokeCommand, { Payload: JSON.stringify({ request: 'list-bucket' }) })
    .resolves({
      Payload: listBucket,
    });
};

describe('getBucketData', () => {
  beforeEach(() => {
    LambdaClientMock.reset();
    CognitoIdentityClientMock.reset();
  });

  it('should return correct bucket data', async () => {
    const listBucket = encoder.encode(
      JSON.stringify({
        body: JSON.stringify({
          Contents: mockBucketListData(config.services),
        }),
      }),
    );
    mockLambdaResponse(listBucket);
    const result = await getBucketData();
    expect(result).toEqual({
      adminBucketName: 'bucket1',
      keyAccounts: [
        { accountId: '12345', key: `test/12345/${config.services}/bucket1` },
        { accountId: '12345', key: `test/12345/${config.services}/bucket2` },
        { accountId: '22345', key: `test/22345/${config.services}/bucket3` },
      ],
    });
  });
  it('should return correct bucket data with empty bucket list', async () => {
    const listBucket = encoder.encode(
      JSON.stringify({
        body: JSON.stringify({
          Contents: mockBucketListData('test'),
        }),
      }),
    );
    mockLambdaResponse(listBucket);
    const result = await getBucketData();
    expect(result).toEqual({
      adminBucketName: 'bucket1',
      keyAccounts: [],
    });
  });
});
