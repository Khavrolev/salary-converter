import { Currency, CurrencyRates } from "../../utils/types";
import { formatSalary } from "../../utils/utils";

interface Props {
  salary: CurrencyRates;
  rates: CurrencyRates;
}

function Overall({ salary, rates }: Props) {
  function getOverallSalary() {
    const sum = Object.values(Currency).reduce(
      (acc, currency) => acc + salary[currency] / rates[currency],
      0
    );

    return formatSalary(sum);
  }

  return <h3>{`Overall: ${getOverallSalary()}`}</h3>;
}

export default Overall;
