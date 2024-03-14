export default function Row({ tx }) {
  const { hash, balance_change, balance_change_usd, time } = tx;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="ps-2">
          <div className="font-normal text-gray-500">{hash}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        {balance_change_usd < 0 ? (
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />
            Sent
          </div>
        ) : (
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />
            Received
          </div>
        )}
      </td>
      <td className="px-6 py-4">
        {balance_change} BTC / {balance_change_usd} USD
      </td>
      <td className="px-6 py-4">{time} UTC</td>
    </tr>
  );
}
