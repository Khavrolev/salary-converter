import { Currency, CurrencyRates } from "./types";

export function initSalary() {
  return Object.values(Currency).reduce((acc, currency) => {
    const valueFromLocalStorage = localStorage.getItem(currency);
    acc[currency] = validateInput(valueFromLocalStorage);

    return acc;
  }, {} as CurrencyRates);
}

export function formatSalary(value: number) {
  return `${value.toLocaleString("ru", {
    maximumFractionDigits: 2,
  })} ${Currency.RUB}`;
}

export function validateInput(value: string | null) {
  return Number(value) || 0;
}
