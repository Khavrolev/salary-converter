import axios from "axios";
import { toast } from "react-toastify";
import { Currency, CurrencyResponse } from "./types";
import { BASE_CURRENCY } from "./constants";

export async function getCurrencyRates() {
  try {
    const {
      data: { data },
    } = await axios.get<CurrencyResponse>(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${
        import.meta.env.VITE_CURRENCY_API_KEY
      }&currencies=${Object.values(Currency).join(
        "%2C"
      )}&base_currency=${BASE_CURRENCY}`
    );

    return data;
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
