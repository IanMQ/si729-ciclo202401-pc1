import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = enviroment.api;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<any>(this.apiUrl);
  }
}
