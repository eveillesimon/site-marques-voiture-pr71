import { Injectable } from '@angular/core';
import {Brand} from "../models/brand";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>("http://localhost:3000/brands");
  }

  add(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>("http://localhost:3000/brands", brand);
  }

  findByName(name: String): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`http://localhost:3000/brands?name=${name}`);
  }

  findById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`http://localhost:3000/brands/${id}`);
  }
}
