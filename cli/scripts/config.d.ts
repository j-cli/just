import { resolve } from 'path';
export declare const APP_DIRECTORY: string;
export declare const justConfigPath: string;
export declare const justConfigGlobalPath: string;
export declare const resolveRoot: (dir: string) => string;
export interface JustConfig {
    public?: string;
    webpack?: any;
    hot?: boolean;
    title?: string;
}
declare let justConfig: JustConfig;
export { resolve, justConfig };
