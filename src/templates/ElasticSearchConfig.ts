import { ConfigData } from '../ConfigData';

export interface ElasticSearchConfig extends ConfigData {
  es: {
    hosts: {
      [key: string]: {
        nodes: string[];
        requestTimeout?: number;
      };
    };
  };
}
