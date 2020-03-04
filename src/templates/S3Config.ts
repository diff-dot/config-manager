import { ConfigData } from '../ConfigData';

export interface S3Config extends ConfigData {
  s3: {
    buckets: {
      [key: string]: {
        name: string;
        region: string;
      };
    };
  };
}
