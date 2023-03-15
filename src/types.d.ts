export interface loginInfoInterface {
    account: number;
    password: string;
    hasLogin: boolean;
    _askLogin(): Promise<void>;
    _loadCnf(config: configInterface): Promise<void>;
    _login(): Promise<object>;
}

export interface configBaseInterface {
    // password
    password?: string;
    // web hook
    post_url?: Array<string>;
    access_token?: string;
    timeout?: number;
    // [key: string]: any;
}

export interface configInterface {
    general: configBaseInterface;
    [key: string]: configBaseInterface;
}

