export interface LoginRequest {
    username:       string;
    password:       string;
}

export interface LoginResponse {
    user(arg0: string, user: any): unknown;
    message:       string;
    data: LoginResponseData;
}

export interface LoginResponseData {
    id: number;
    username: string;
    token: string;
}

