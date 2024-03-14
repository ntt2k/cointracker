import { satoshiToBTC } from "../utils/convert";

export default function Balance({ balance, balance_usd }) {
  const btc = satoshiToBTC(balance);
  const usd = balance_usd.toFixed(2);

  return (
    <div className="pr-8 relative flex !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] text-lime-500 dark:text-white border-gray-200 bg-white bg-clip-border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="ml-[16px] flex h-[60px] w-auto items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">Balance</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {btc} BTC / {usd} USD
        </h4>
      </div>
    </div>
  );
}
