import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {filter, from, map, mergeMap, reduce, tap} from "rxjs";
import {ICurrencyReduced, initialState} from "./models/currency.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currency: ICurrencyReduced;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getData().pipe(
      mergeMap(data => from(data)),
      filter(item => item.currencyCodeA === 840 || item.currencyCodeA === 978),
      reduce((acc, curr) => {
        if(curr.currencyCodeA === 840 && curr.currencyCodeB === 980) {
          acc['USD to UAN'] = curr.rateBuy;
          acc['UAN to USD'] = 1/curr.rateBuy;
        } else if(curr.currencyCodeA === 978 && curr.currencyCodeB === 980) {
          acc['EUR to UAN'] = curr.rateBuy;
          acc['UAN to EUR'] = 1/curr.rateBuy;
        } else {
          acc['EUR to USD'] = curr.rateBuy;
          acc['USD to EUR'] = 1/curr.rateBuy;
        }
        return acc;
      }, initialState)
    ).subscribe(value => this.currency = value)
  }
}
