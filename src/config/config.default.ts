import { ConfigData } from './config.interface';

export const DEFAULT_CONFIG:ConfigData = {
    env: 'development',
    port: 3000,
    db: undefined,
    logLevel: 'info',
}