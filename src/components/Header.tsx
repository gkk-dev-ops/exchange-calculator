const Header: React.FC = () => {
  const popularCurrencies = ["USD", "EUR", "JPY", "GBP", "CAD", "CHF", "AUD", "CNY"]

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">Calculate PLN exchange rate</h1>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-blue-700">
      {popularCurrencies.map((currency) => (
        <span key={currency} className="mx-2 text-xs"> 1 PLN = {1} {currency}</span>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
