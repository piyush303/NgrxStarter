import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../store/users/users.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private API_URL = ''
    private http = inject(HttpClient);

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.API_URL)
    }
}