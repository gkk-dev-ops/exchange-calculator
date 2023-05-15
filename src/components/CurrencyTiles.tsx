import { useState } from "react";
import { fetchExchangeRate } from "../api/exchangeRate";
import { Currency } from "../types/types";

type CurrencyTilesProps = {
  currency1: Currency;
  currency2: Currency;
};

const CurrencyTiles: React.FC<CurrencyTilesProps> = ({
  currency1,
  currency2,
}) => {
  async function handleCurrency1Input(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const currency1value = value === "" ? null : Math.round(Number(value)*100)/100;
    const exchangeRate = await fetchExchangeRate(currency1, currency2);
    const currency2value = currency1value ? Math.round(currency1value * exchangeRate*100)/100 : null
    setcurrency1Input(currency1value);
    setcurrency2Input(currency2value);
  }
  

  const [currency1Input, setcurrency1Input] = useState<number | null>(null);
  const [currency2Input, setcurrency2Input] = useState<number | null>(null);

  return (
    <>
      <div className="w-72 rounded-xl bg-slate-200 p-4">
        <div className="flex flex-row items-center justify-between">
          <p className="ml-2">{currency1}</p>
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
          <p className="ml-2">{currency2}</p>
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
