export interface LoginTypes {
    username: string;
    name: string;
    lastname: string;
    roles: string[];
    token_type: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
}

export interface UserListTypes {
    users: UserTypes[];
}

export interface UserTypes {
    contactId: number;
    name: string;
    surnames: string;
    birthDate: Date;
    gender: string;
    photo: null | string;
    phone: string;
    profesion: string;
    email: string;
}

export interface LoginFormTypes {
    email: string;
    password: string;
}
