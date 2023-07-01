export enum Currency {
  EUR = "EUR",
  USD = "USD",
}

export type CurrencyRates = Record<Currency, number>;

export interface CurrencyResponse {
  data: CurrencyRates;
}
