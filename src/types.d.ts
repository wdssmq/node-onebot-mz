export interface loginInfoInterface {
    account: number;
    password: string;
    hasLogin: boolean;
    _askLogin(): Promise<void>;
    _loadEnv(): Promise<void>;
    _login(): Promise<object>;
}
