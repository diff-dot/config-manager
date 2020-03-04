import { expect } from 'chai';
import { ConfigManager } from '../../src/ConfigManager';

const env = process.env.NODE_ENV || 'development';

describe('check-env', () => {
  it('Get current env', () => {
    const env = ConfigManager.env;
    expect(env).to.be.eq(env);
  });

  it('Determine development env', () => {
    expect(ConfigManager.isDevelopment()).to.be.eq(env === 'development');
  });

  it('Determine production env', () => {
    expect(ConfigManager.isProduction()).to.be.eq(env !== 'development');
  });
});
