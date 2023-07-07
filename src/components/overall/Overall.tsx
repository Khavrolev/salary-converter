import { Currency, CurrencyRates, CurrencySalary } from "../../utils/types";
import { formatSalary } from "../../utils/utils";

interface Props {
  salary: CurrencySalary;
  rates: CurrencyRates;
}

function Overall({ salary, rates }: Props) {
  function getOverallSalary() {
    const sum = Object.values(Currency).reduce(
      (acc, currency) =>
        acc +
        (salary[currency] * rates[currency].Value) / rates[currency].Nominal,
      0
    );

    return formatSalary(sum);
  }

  return <h3>{`${getOverallSalary()}`}</h3>;
}

export default Overall;
