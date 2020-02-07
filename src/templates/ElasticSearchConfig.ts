export interface ElasticSearchConfig {
  es: {
    hosts: {
      [key: string]: {
        nodes: string[];
        requestTimeout?: number;
      };
    };
  };
}
