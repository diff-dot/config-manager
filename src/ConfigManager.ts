import { ConfigData } from './ConfigData';

export class ConfigManager<T extends ConfigData> {
  private readonly PRODUCTION_ENV = 'production';
  private readonly DEVELOPMENT_ENV = 'development';

  private dataMap: Map<string, T>;
  constructor() {
    this.dataMap = new Map();
  }

  public setProductionConfig<S extends T>(config: S) {
    this.setConfig(this.PRODUCTION_ENV, config);
  }

  public setDevelopmentConfig<S extends T>(config: S) {
    this.setConfig(this.DEVELOPMENT_ENV, config);
  }

  public setConfig<S extends T>(env: string, config: S) {
    this.dataMap.set(env, config);
  }

  public isProduction(): boolean {
    return this.is(this.PRODUCTION_ENV);
  }

  public isDevelopment(): boolean {
    return this.is(this.DEVELOPMENT_ENV);
  }

  public is(env: string): boolean {
    return this.env === env;
  }

  public get env(): string {
    return process.env.NODE_ENV || this.DEVELOPMENT_ENV;
  }

  public get data(): T {
    const data = this.dataMap.get(this.env);
    if (!data) throw new Error(`${this.env} config is undefined.`);

    return data;
  }
}
