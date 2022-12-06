import {Component, Input, OnInit} from '@angular/core';
import {ICurrencyReduced} from "../../../models/currency.interfaces";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  @Input() currency: ICurrencyReduced;
  titleExchange: string = 'Type value to convert';

  constructor() { }

  ngOnInit(): void {
  }
}
