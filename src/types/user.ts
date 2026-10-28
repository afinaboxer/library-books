export interface User {
    id: number,
    name: string,
    age: number,
    isAdmin: boolean,
}

export interface UserDataProps {
    users: User[];
}

export interface UserType{
    name: string,
    age: number,
}
