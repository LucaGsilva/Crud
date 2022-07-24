import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { IResponseData, IUser } from "../interfaces/interface";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    url: string = 'api/user';
    constructor(private http: HttpClient) { }


    getAll(): Observable<IResponseData<IUser>> {

        return this.http.get<IResponseData<IUser>>(this.url);
    }

    getById(idUser: number): Observable<IResponseData<IUser>> {
        
        return this.http.get<IResponseData<IUser>>(this.url + '/' + idUser);
    }

    postUser(request: IUser) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Response-Type': 'text',
            })
        }
        return this.http.post<IResponseData<IUser>>(this.url, request, httpOptions);
    }

    updatetUser(request: IUser) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Response-Type': 'text',
            })
        }
        return this.http.put<IResponseData<IUser>>(this.url, request, httpOptions);
    }


    deleteUser(idUser: number): Observable<IResponseData<IUser>> {
        
        return this.http.delete<IResponseData<IUser>>(this.url + '/' + idUser);
    }
}
