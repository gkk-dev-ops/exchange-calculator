import Header from './components/Header';
import SaveHistoryButton from './components/SaveHistoryButton';
import CurrencyTiles from './components/CurrencyTiles';

function App() {
  const currency1 = "PLN";
  const currency2 = "USD";
  return (
    <>
      <div className="mt-16 flex w-72 flex-col gap-4">
      <Header currency1={currency1} currency2={currency2}/>
      <CurrencyTiles currency1={currency1} currency2={currency2}/>
      <SaveHistoryButton />
      </div>
    </>
  );
}

export default App;
