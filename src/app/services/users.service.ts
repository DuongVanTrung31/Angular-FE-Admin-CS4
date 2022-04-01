import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";


const API = `${environment.apiUrl}/users`
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(API)
  }
}
