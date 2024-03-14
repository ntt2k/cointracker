import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import WalletSearch from "./components/WalletSearch";

function App() {
  const [address, setAddress] = useState<string>("");
  const [data, setData] = useState(null);

  // Define the API endpoint
  const API_URL = "http://localhost:8000/wallet";

  useEffect(() => {
    // Make a GET request to the API
    axios
      .get(`${API_URL}/${address}`)
      .then((response) => {
        // Handle the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("There was an error fetching the data:", error);
      });
  }, [address]);

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <NavBar />
      <div className="p-1 pt-16 md:p-24 relative overflow-x-auto shadow-md sm:rounded-lg">
        <WalletSearch data={data} onSubmit={(value: string) => setAddress(value)} />
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
