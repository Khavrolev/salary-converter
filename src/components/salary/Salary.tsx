import { SALARY_LOCAL_STORAGE_NAME } from "../../utils/const";
import { Currency, CurrencyRates, CurrencySalary } from "../../utils/types";
import Input from "../input/Input";
import styles from "./Salary.module.scss";

interface Props {
  salary: CurrencySalary;
  rates: CurrencyRates;
  changeSalary: (salary: CurrencySalary) => void;
}

function Salary({ salary, rates, changeSalary }: Props) {
  function updateSalary(currency: Currency, value: number) {
    const newSalary = { ...salary, [currency]: value };
    changeSalary(newSalary);

    localStorage.setItem(SALARY_LOCAL_STORAGE_NAME, JSON.stringify(newSalary));
  }

  return (
    <div className={styles.salary}>
      {Object.values(Currency).map((currency) => (
        <Input
          key={currency}
          currency={currency}
          value={salary[currency]}
          nominal={rates[currency].Nominal}
          rate={rates[currency].Value}
          onChange={(value) => updateSalary(currency, value)}
        />
      ))}
    </div>
  );
}

export default Salary;
