export default function Table() {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-3 py-3">
            Transaction
          </th>
          <th scope="col" className="px-6 py-3">
            Type
          </th>
          <th scope="col" className="px-6 py-3">
            Balance
          </th>
          <th scope="col" className="px-6 py-3">
            Timestamp
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="ps-2">
              <div className="font-normal text-gray-500">
                92e188c4ec7b36b8bbc1af90f80cc8f869f8ec21c030e8ade14e5f070ca466ff
              </div>
            </div>
          </th>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />
              Sent
            </div>
          </td>
          <td className="px-6 py-4">-28566 BTC / -20.99 USD</td>
          <td className="px-6 py-4">2024-03-13 00:14:27 UTC</td>
        </tr>
      </tbody>
    </table>
  );
}
