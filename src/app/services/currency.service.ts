import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {ICurrency} from "../models/currency.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url :string = 'https://api.monobank.ua/bank/currency';

  constructor(private http: HttpClient) { }

  getData(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(this.url);
  }
}
