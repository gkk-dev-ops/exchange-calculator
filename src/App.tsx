import Header from "./components/Header";
import SaveHistoryButton from "./components/SaveHistoryButton";
import CurrencyTiles from "./components/CurrencyTiles";

function App() {
  return (
    <>
      <div className="mt-16 flex w-72 flex-col gap-4">
        <Header/>
        <CurrencyTiles />
        <SaveHistoryButton />
      </div>
    </>
  );
}

export default App;
