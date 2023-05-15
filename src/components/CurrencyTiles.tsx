import React, { useEffect, useState } from "react";
import {
  fetchExchangeRate,
  fetchAvailableCurrencies,
} from "../api/exchangeRate";
import { Currency } from "../types/types";

const CurrencyTiles: React.FC = () => {
  async function handleCurrency1Input(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;
    calculateValues(value);
  }

  async function calculateValues(
    valueOrInput1: string,
    updatedSelectionCurrency1?: string,
    updatedSelectionCurrency2?: string
  ) {
    const currency1value =
      valueOrInput1 === ""
        ? null
        : Math.round(Number(valueOrInput1) * 100) / 100;
    const exchangeRate = await fetchExchangeRate(
      updatedSelectionCurrency1 ? updatedSelectionCurrency1 : currency1,
      updatedSelectionCurrency2 ? updatedSelectionCurrency2 : currency2
    );
    const currency2value = currency1value
      ? Math.round(currency1value * exchangeRate * 100) / 100
      : null;
    console.log("currency1value", currency1value);
    console.log("currency2value", currency2value);
    setcurrency1Input(currency1value);
    setcurrency2Input(currency2value);
  }

  async function handleCurrencySelection(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setCurrency1(event.target.value as Currency);
    await calculateValues(currency1Input?.toString() ?? "", event.target.value);
  }

  async function handleCurrencySelectionCurrency2(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setCurrency2(event.target.value as Currency);
    await calculateValues(currency1Input?.toString() ?? "", event.target.value);
  }

  useEffect(() => {
    fetchAvailableCurrencies()
      .then((data) => {
        setAvailableCurrencies(data);
      })
      .catch((error) => {
        console.error("Error fetching available currencies:", error);
      });
  }, []);

  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [currency1, setCurrency1] = useState<Currency>("PLN");
  const [currency2, setCurrency2] = useState<Currency>("EUR");
  const [currency1Input, setcurrency1Input] = useState<number | null>(null);
  const [currency2Input, setcurrency2Input] = useState<number | null>(null);

  return (
    <>
      <div className="w-72 rounded-xl bg-slate-200 p-4">
        <div className="flex flex-row items-center justify-between">
          <select
            className="bg-slate-200 focus:outline-none"
            onChange={handleCurrencySelection}
          >
            <option value="">{currency1 || "Select a value"}</option>
            {availableCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            className="w-32 bg-slate-200 p-2 text-right focus:outline-none"
            type="number"
            value={currency1Input ?? ""}
            onChange={handleCurrency1Input}
            placeholder={`0 ${currency1}`}
          />
          {currency1Input && <p>{currency1}</p>}
        </div>
        <div>
          <p className="ml-2 text-xs text-slate-500">
            Balance: 300 {currency1}
          </p>
        </div>
      </div>
      <div className="w-72 rounded-xl bg-slate-200 p-4">
        <div className="flex flex-row items-center justify-between">
          <select
            className="bg-slate-200 focus:outline-none"
            onChange={handleCurrencySelectionCurrency2}
          >
            <option value="">{currency2 || "Select a value"}</option>
            {availableCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            className="w-32 bg-slate-200 p-2 text-right focus:outline-none"
            type="number"
            value={currency2Input ?? ""}
            placeholder={`0 ${currency2}`}
            disabled
          />
          {currency2Input && <p>{currency2}</p>}
        </div>
        <div>
          <p className="ml-2 text-xs text-slate-500">Balance: 0 {currency2}</p>
        </div>
      </div>
    </>
  );
};

export default CurrencyTiles;
