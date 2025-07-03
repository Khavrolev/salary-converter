import { Currency, CurrencyValue } from "../../utils/types";
import { formatSalary, validateInput } from "../../utils/utils";
import styles from "./Input.module.scss";

interface Props {
  currency: Currency;
  value: number;
  rate: CurrencyValue;
  onChange: (value: number) => void;
}

export function Input({ currency, value, rate, onChange }: Props) {
  return (
    <div className={styles.input}>
      <div className={styles.input_wrapper}>
        <label htmlFor={currency} className={styles.input__label}>
          {rate.Name}
        </label>
        <input
          id={currency}
          type="number"
          value={Number(value).toString()}
          onChange={(event) => onChange(validateInput(event.target.value))}
          className={styles.input__field}
        />
      </div>
      <h4 className={styles.input__overall}>
        {formatSalary((rate.Value * value) / rate.Nominal)}
      </h4>
    </div>
  );
}
