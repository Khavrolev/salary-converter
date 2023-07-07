export enum Currency {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
}

export interface CurrencyValue {
  Nominal: number;
  Value: number;
}

export type CurrencySalary = Record<Currency, number>;
export type CurrencyRates = Record<Currency, CurrencyValue>;

export interface CurrencyResponse {
  Valute: CurrencyRates;
}
