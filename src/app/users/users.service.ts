import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../store/users/users.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private API_URL = 'https://jsonplaceholder.typicode.com/users'
    private http = inject(HttpClient);

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.API_URL)
    }

    updateUser(selectedUser: any): Observable<any> {
        return this.http.patch(`${this.API_URL}`, selectedUser, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    }
}