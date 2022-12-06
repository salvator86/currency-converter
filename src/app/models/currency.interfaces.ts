export interface ICurrency {
  currencyCodeA: number,
  currencyCodeB: number,
  rateBuy: number,
}

export type currencyType = 'UAN' | 'EUR' | 'USD';

export type exchangeType =
  'UAN to USD' |
  'UAN to EUR' |
  'USD to EUR' |
  'USD to UAN' |
  'EUR to UAN' |
  'EUR to USD' |
  'UAN to UAN' |
  'EUR to EUR' |
  'USD to USD'

export interface ICurrencyReduced {
  'USD to UAN': number,
  'UAN to USD': number,
  'EUR to UAN': number,
  'UAN to EUR': number,
  'USD to EUR': number,
  'EUR to USD': number,
  'UAN to UAN': number,
  'USD to USD': number,
  'EUR to EUR': number
}

export const initialState: ICurrencyReduced = {
  'USD to UAN': 0,
  'UAN to USD': 0,
  'EUR to UAN': 0,
  'UAN to EUR': 0,
  'USD to EUR': 0,
  'EUR to USD': 0,
  'UAN to UAN': 1,
  'USD to USD': 1,
  'EUR to EUR': 1
}
