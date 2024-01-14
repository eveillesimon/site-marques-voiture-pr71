import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Model} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Model[]> {
    return this.httpClient.get<Model[]>("http://localhost:3000/models");
  }

  findByBrand(brandId: number): Observable<Model[]> {
    return this.httpClient.get<Model[]>(`http://localhost:3000/models?brandId=${brandId}`);
  }

  add(model: Model): Observable<Model> {
    return this.httpClient.post<Model>("http://localhost:3000/models", model);
  }
}
