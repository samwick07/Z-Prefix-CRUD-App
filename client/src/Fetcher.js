import { useState, useEffect } from "react";

const Fetcher = (data) => {
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState(null);
  const url = `http://localhost:`;
  const port = `8080`;
  const endpoint = `/SignIn`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url+port+endpoint)
        if (!res.ok) {
          throw new Error('Unable to fetch data!');
        }
        const data = await res.json();
        setFetchData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    }
    fetchData();
  }, [url, port, endpoint]);
  return { fetchData, error };
}

export default Fetcher;