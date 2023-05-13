type HeaderProps = {
    // TODO: currencies are not any strings, they have to adhere to ISO 4217
    currency1: string;
    currency2: string;
};
  
const Header: React.FC<HeaderProps> = ({ currency1, currency2 }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">Sell {currency1}</h1>
      <p className="text-xs text-blue-700">
        1 {currency1} = 0.243032 {currency2}
      </p>
    </div>
  );
};

export default Header;
