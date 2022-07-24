export interface IResponseData<T> {
    code: number;
    messages: string;
    data?: any;
}


export interface IUser {
    id: number;
    name: string;
    email: string | null;
    lastName: string;
    birthDate: string;
    schooling: number;
}
