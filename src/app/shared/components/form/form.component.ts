import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {currencyType, exchangeType, ICurrencyReduced} from "../../../models/currency.interfaces";

interface FormValue {
  inputValue: number,
  inputCurrency: currencyType,
  outputValue: number,
  outputCurrency: currencyType
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup
  @Input() currency: ICurrencyReduced;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      inputValue: new FormControl(0),
      inputCurrency: new FormControl('UAN'),
      outputValue: new FormControl(0),
      outputCurrency: new FormControl('USD')
    });
  }

  convertOutput(value: FormValue) {
    const {inputValue, inputCurrency, outputValue, outputCurrency} = value;
    const exchange: exchangeType = `${inputCurrency} to ${outputCurrency}`;
    const exchangedValue = this.currency[exchange] * inputValue;

    this.form.controls['outputValue'].setValue(exchangedValue.toFixed(2));
  }

  convertInput(value: FormValue) {
    const {inputValue, inputCurrency, outputValue, outputCurrency} = value;
    const exchange: exchangeType = `${outputCurrency} to ${inputCurrency}`;
    const exchangedValue = this.currency[exchange] * outputValue;

    this.form.controls['inputValue'].setValue(exchangedValue.toFixed(2));
  }
}
