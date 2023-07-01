import { useEffect, useState } from "react";
import { getCurrencyRates } from "./utils/fetch";
import { CurrencyRates } from "./utils/types";
import Overall from "./components/Overall";
import Salary from "./components/Salary";
import { initSalary } from "./utils/utils";

function App() {
  const [rates, setRates] = useState<CurrencyRates>();
  const [salary, setSalary] = useState<CurrencyRates>(initSalary());

  useEffect(() => {
    loadCurrencyRates();
  }, []);

  async function loadCurrencyRates() {
    // const rates = await getCurrencyRates();
    // setRates(rates);
    setRates({ EUR: 0.010313, USD: 0.011258 });
  }

  if (!rates) {
    return "Oops, something wrong...";
  }

  return (
    <div>
      <h2>Fill salary</h2>
      <Salary salary={salary} rates={rates} changeSalary={setSalary} />
      <Overall salary={salary} rates={rates} />
    </div>
  );
}

export default App;
