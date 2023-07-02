export enum Currency {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
}

export type CurrencyRates = Record<Currency, number>;

export interface CurrencyResponse {
  data: CurrencyRates;
}
