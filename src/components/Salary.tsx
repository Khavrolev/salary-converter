import { Currency, CurrencyRates } from "../utils/types";
import Input from "./Input";

interface Props {
  salary: CurrencyRates;
  rates: CurrencyRates;
  changeSalary: (salary: CurrencyRates) => void;
}

function Salary({ salary, rates, changeSalary }: Props) {
  function updateSalary(currency: Currency, value: number) {
    changeSalary({ ...salary, [currency]: value });
    localStorage.setItem(currency, value.toString());
  }

  return (
    <div>
      {Object.values(Currency).map((currency) => (
        <Input
          key={currency}
          currency={currency}
          value={salary[currency]}
          rate={rates[currency]}
          onChange={(value) => updateSalary(currency, value)}
        />
      ))}
    </div>
  );
}

export default Salary;
