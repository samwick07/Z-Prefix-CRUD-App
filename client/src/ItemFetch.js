import { useState, useEffect } from "react";

const ItemFetch = (id) => {
  const [itemData, setItemData] = useState();
  const [error, setError] = useState(null);
  const url = `http://localhost:`;
  const port = `8080`;
  const endpoint = `/Items/${id}`;

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(url+port+endpoint)
        if (!res.ok) {
          throw new Error('Unable to fetch inventory!');
        }
        const data = await res.json();
        setItemData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    }
    fetchItem();
  }, [url, port, endpoint]);
  return { itemData, error };
}

export default ItemFetch;