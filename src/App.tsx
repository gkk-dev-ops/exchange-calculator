function App() {
  return (
    <>
      <div className="w-72 flex flex-col gap-4 mt-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Sell PLN</h1>
          <p className="text-blue-700 text-xs">1 zł = 0.243032 $</p>
        </div>
        <div className="w-72 rounded-xl bg-slate-200 p-4">
          <div className="flex flex-row justify-between items-center">
              <p className="ml-2">PLN</p>
              <input className="w-32 bg-slate-200 text-right focus:outline-none p-2" type="number" placeholder="0 zł" />
          </div>
          <div>
            <p className="ml-2 text-xs text-slate-500">Balance: 300 zł</p>
          </div>
        </div>
        <div className="w-72 rounded-xl bg-slate-200 p-4">
          <div className="flex flex-row justify-between items-center">
              <p className="ml-2">USD</p>
              <input className="w-32 bg-slate-200 text-right focus:outline-none p-2" type="number" placeholder="0 zł" />
          </div>
          <div>
            <p className="ml-2 text-xs text-slate-500">Balance: 0 $</p>
          </div>
        </div>
        <div>
          <button className="bg-blue-700 p-3 rounded-2xl text-slate-200 w-full">Review order</button>
        </div>
      </div>
    </>
  );
}

export default App;
