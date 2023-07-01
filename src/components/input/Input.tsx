import { Currency } from "../../utils/types";
import { formatSalary, validateInput } from "../../utils/utils";
import styles from "./Input.module.scss";

interface Props {
  currency: Currency;
  value: number;
  rate: number;
  onChange: (value: number) => void;
}

function Input({ currency, value, rate, onChange }: Props) {
  console.log(value);
  return (
    <div className={styles.input}>
      <div className={styles.input_wrapper}>
        <label
          htmlFor={currency}
          className={styles.input__label}
        >{`${currency}:`}</label>
        <input
          id={currency}
          type="number"
          value={Number(value).toString()}
          onChange={(event) => onChange(validateInput(event.target.value))}
          className={styles.input__field}
        />
      </div>
      <h4 className={styles.input__overall}>{formatSalary(value / rate)}</h4>
    </div>
  );
}

export default Input;
