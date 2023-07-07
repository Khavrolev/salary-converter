import axios from "axios";
import { toast } from "react-toastify";
import { Currency, CurrencyResponse } from "./types";

export async function getCurrencyRates() {
  try {
    const {
      data: { Valute: data },
    } = await axios.get<CurrencyResponse>(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );

    return { ...data, [Currency.RUB]: { Nominal: 1, Value: 1 } };
  } catch (error) {
    toast.error("Oops, something wrong...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}
