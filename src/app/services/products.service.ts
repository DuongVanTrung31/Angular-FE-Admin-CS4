import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";

const API = `${environment.apiUrl}/products/`

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http :HttpClient) {
  }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(API)
  }

  getProductById(id?: number) :Observable<Product> {
    return this.http.get<Product>(API + id)
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(API, product);
  }

  deleteProduct(id?: number): Observable<any> {
    return this.http.delete(API + id);
  }
}
