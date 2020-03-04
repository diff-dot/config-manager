import { ConfigData } from '../ConfigData';

export interface CryptoConfig extends ConfigData {
  crypto: {
    algorithm: string;
    key: string;
  };
}
