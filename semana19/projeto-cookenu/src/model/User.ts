export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string
    ) {}
};

export interface UserRegistration {
    name: string,
    email: string,
    password: string
};

export interface UserAuthentication {
    email: string,
    password: string
}

export interface AuthenticationData {
    id: string; 
}