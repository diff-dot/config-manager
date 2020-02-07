export interface S3Config {
  s3: {
    buckets: {
      [key: string]: {
        name: string;
        region: string;
      };
    };
  };
}
