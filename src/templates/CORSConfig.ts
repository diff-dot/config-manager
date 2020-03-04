import { ConfigData } from '../ConfigData';

export interface CORSConfig extends ConfigData {
  cors: {
    allowOrigins: string[];
    allowHeaders: string;
  };
}
