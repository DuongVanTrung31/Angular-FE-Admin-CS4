import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Order} from "../models/order";
import {Observable} from "rxjs";

const API = `${environment.apiUrl}/orders`

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) {
  }

  getAllOrder():Observable<Order[]> {
    return this.http.get<Order[]>(API);
  }
}
