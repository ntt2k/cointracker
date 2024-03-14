import { useState } from "react";

import Balance from "./Balance";

type WalletSearchPropsType = {
  data: unknown;
  onSubmit: (value: string) => void;
};

export default function WalletSearch({
  data,
  onSubmit
}: WalletSearchPropsType) {
  const [wallet, setWallet] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the key pressed is the Enter key
    if (e.key === "Enter") {
      onSubmit(wallet);
    }
  };

  const obj = data ? data.data : {};
  // Get the first key
  const firstKey = Object.keys(obj)[0];
  // Get the value of the first key
  const firstValue = obj[firstKey]?.["address"];
  const { balance, balance_usd } = firstValue || {balance: 0, balance_usd: 0};

  return (
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Wallet address"
          value={wallet}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <Balance balance={balance} balance_usd={balance_usd} />
    </div>
  );
}
