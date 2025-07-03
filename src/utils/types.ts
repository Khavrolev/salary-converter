export enum Currency {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
}

export interface CurrencyValue {
  Nominal: number;
  Previous: number;
  Value: number;
  Name: string;
}

export type CurrencySalary = Record<Currency, number>;
export type CurrencyRates = Record<Currency, CurrencyValue>;

export interface CurrencyResponse {
  Valute: CurrencyRates;
}
