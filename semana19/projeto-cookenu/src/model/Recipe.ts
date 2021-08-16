export class Recipe {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public createdAt: Date
    ) {}
}

export interface RecipeRegistration {
    title: string,
    description: string
};

export interface AuthenticationData {
    id: string; 
}