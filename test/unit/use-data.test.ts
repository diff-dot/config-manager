import { expect } from 'chai';
import { ConfigManager } from '../../src/ConfigManager';
import { ConfigData } from '../../src/ConfigData';

const TEST_VALUE = 'tester';

interface ConfigStructure extends ConfigData {
  microServiceName: string;
  version: number;
}

const config = new ConfigManager<ConfigStructure>();
describe('use-sdata', () => {
  it('Set data', () => {
    config.setDevelopmentConfig({
      microServiceName: TEST_VALUE,
      version: 1
    });
  });

  it('Get data', () => {
    expect(config.data.microServiceName).to.be.eq(TEST_VALUE);
  });
});
