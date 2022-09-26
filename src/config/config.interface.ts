/** DB Configuration interface */
export interface ConfigDBData { 
    type: string;
    user: string;
    pass: string;
    name: string;
    host: string;
    port: number;
    dialect: string;
    charset: string;
    collate: string;
}

/**
 * Configuration Data for the app
 */

export interface ConfigData { 
    /** Application's environment 
     * @Example development, staging, production 
     * */
    env: string;

    /** The port number of the http server to listen on. */
    port: number;

    /** Database connection details. */
    db?: ConfigDBData;

    /**
     * the Log level to use
     * @Example 'verbose', 'info', 'error'.
     */
    logLevel: string;

}