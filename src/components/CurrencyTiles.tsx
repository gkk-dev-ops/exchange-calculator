import { useState } from "react";
import { fetchExchangeRate } from "../api/exchangeRates";

type CurrencyTilesProps = {
  // TODO: currencies are not any strings, they have to adhere to ISO 4217
  currency1: string;
  currency2: string;
};

const CurrencyTiles: React.FC<CurrencyTilesProps> = ({
  currency1,
  currency2,
}) => {
  async function handleCurrency1Input(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setcurrency1Input(value === "" ? null : Number(value));
    setExchangeRate(await fetchExchangeRate(currency1, currency2));
    setcurrency2Input((currency1Input ?? 1) * exchangeRate);
  }

  const [currency1Input, setcurrency1Input] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number>(1);
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
