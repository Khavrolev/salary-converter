import { SALARY_LOCAL_STORAGE_NAME } from "./const";
import { Currency, CurrencySalary } from "./types";

export function initSalary() {
  const salary = localStorage.getItem(SALARY_LOCAL_STORAGE_NAME);

  if (!salary) {
    return getValidSalary();
  }

  try {
    return getValidSalary(JSON.parse(salary));
  } catch {
    return getValidSalary();
  }
}

function getValidSalary(salary?: CurrencySalary) {
  return Object.values(Currency).reduce((acc, currency) => {
    if (salary && !isNaN(salary[currency])) {
      acc[currency] = Number(salary[currency]);
    } else {
      acc[currency] = 0;
    }

    return acc;
  }, {} as CurrencySalary);
}

export function formatSalary(value: number) {
  return `${value.toLocaleString("ru", {
    maximumFractionDigits: 2,
  })} ${Currency.RUB}`;
}

export function validateInput(value: string | null) {
  return Number(value) || 0;
}
