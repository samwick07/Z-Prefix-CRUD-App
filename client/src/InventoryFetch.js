import { useState, useEffect } from "react";

const InventoryFetch = (data) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [error, setError] = useState(null);
  const url = `http://localhost:`;
  const port = `8080`;
  const endpoint = `/Inventory`;

  useEffect(() => {
    async function fetchInventory() {
      try {
        const res = await fetch(url+port+endpoint)
        if (!res.ok) {
          throw new Error('Unable to fetch inventory!');
        }
        const data = await res.json();
        setInventoryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    }
    fetchInventory();
  }, [url, port, endpoint]);
  return { inventoryData, error };
}

export default InventoryFetch;