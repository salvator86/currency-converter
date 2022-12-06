import {Component, Input, OnInit} from '@angular/core';
import {ICurrencyReduced} from "../../../models/currency.interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() currency: ICurrencyReduced;
  titleHeader: string = 'Currency Converter';

  constructor() { }

  ngOnInit(): void {

  }

}
