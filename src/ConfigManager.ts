import { ConfigData } from './ConfigData';

const PRODUCTION_ENV = 'production';
const DEVELOPMENT_ENV = 'development';

export class ConfigManager<T extends ConfigData> {
  private dataMap: Map<string, T>;
  constructor() {
    this.dataMap = new Map();
  }

  public setProductionConfig<S extends T>(config: S): void {
    this.setConfig(PRODUCTION_ENV, config);
  }

  public setDevelopmentConfig<S extends T>(config: S): void {
    this.setConfig(DEVELOPMENT_ENV, config);
  }

  public setConfig<S extends T>(env: string, config: S): void {
    this.dataMap.set(env, config);
  }

  public static isProduction(): boolean {
    return this.is(PRODUCTION_ENV);
  }

  public static isDevelopment(): boolean {
    return this.is(DEVELOPMENT_ENV);
  }

  public static is(env: string): boolean {
    return this.env === env;
  }

  public static get env(): string {
    return process.env.NODE_ENV || DEVELOPMENT_ENV;
  }

  public get data(): T {
    const data = this.dataMap.get(ConfigManager.env);
    if (!data) throw new Error(`${ConfigManager.env} config is undefined.`);

    return data;
  }
}
