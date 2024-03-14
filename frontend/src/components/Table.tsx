import Row from "./Row";

export default function Table({ data }) {
  const obj = data ? data.data : {};
  // Get the first key
  const firstKey = Object.keys(obj)[0];
  // Get the value of the first key
  const transactions = obj[firstKey] ? obj[firstKey]["transactions"] : [];

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
        {transactions.map((tx, index) => <Row key={index} tx={tx} />)}
      </tbody>
    </table>
  );
}
