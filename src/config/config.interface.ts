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

export interface ConfigData { 
    env: string;

    port: number;

    db?: ConfigDBData;

    logLevel?: string;
}