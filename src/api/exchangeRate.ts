import axios from "axios";
import type { Currency } from "../types/types";

const URL = import.meta.env.VITE_BACKEND_URL;
const PORT = import.meta.env.VITE_BACKEND_PORT;

export async function fetchExchangeRate(
  currency1: Currency,
  currency2: Currency
) {
  const res = await axios.get(
    `${URL}:${PORT}/api/exchange/${currency1}/${currency2}/`
  );
  return res.data.exchangeRate as number;
}

export async function fetchAvailableCurrencies() {
  const res = await axios.get(`${URL}:${PORT}/api/availableCurrencies`);
  return res.data;
}
