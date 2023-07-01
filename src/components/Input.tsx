import { Currency } from "../utils/types";
import { formatSalary, validateInput } from "../utils/utils";

interface Props {
  currency: Currency;
  value: number;
  rate: number;
  onChange: (value: number) => void;
}

function Input({ currency, value, rate, onChange }: Props) {
  return (
    <div>
      <label htmlFor={currency}>{currency}</label>
      <input
        id={currency}
        type="number"
        value={value}
        onChange={(event) => onChange(validateInput(event.target.value))}
      />
      <h4>{formatSalary(value / rate)}</h4>
    </div>
  );
}

export default Input;
