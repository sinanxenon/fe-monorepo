// local and dev environment
import { environment as base } from './environment.base';

export const environment = {
  ...base,
  production: false,
  environmentName: 'development',
};
