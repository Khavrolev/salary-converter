import { useEffect, useState } from "react";
import { getCurrencyRates } from "./utils/fetch";
import { CurrencyRates } from "./utils/types";
import Overall from "./components/overall/Overall";
import Salary from "./components/salary/Salary";
import { initSalary } from "./utils/utils";
import loadingLogo from "../assets/loading.gif";
import oopsLogo from "../assets/oops.gif";
import Image from "./components/image/Image";
import styles from "./App.module.scss";

function App() {
  const [rates, setRates] = useState<CurrencyRates>();
  const [salary, setSalary] = useState<CurrencyRates>(initSalary());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCurrencyRates();
  }, []);

  async function loadCurrencyRates() {
    setIsLoading(true);
    // const rates = await getCurrencyRates();
    // setRates(rates);
    setRates({ EUR: 0.010313, USD: 0.011258 });

    setIsLoading(false);
  }

  function renderContent() {
    if (isLoading) {
      return <Image src={loadingLogo} alt="loading..." />;
    }

    if (!rates) {
      return <Image src={oopsLogo} alt="oops..." />;
    }

    return (
      <div className={styles.content}>
        <h2 className={styles.header}>Fill salary</h2>
        <Salary salary={salary} rates={rates} changeSalary={setSalary} />
        <Overall salary={salary} rates={rates} />
      </div>
    );
  }

  return <div className={styles.container}>{renderContent()}</div>;
}

export default App;
