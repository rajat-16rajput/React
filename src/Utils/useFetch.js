import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(api) {
    try {
      const resp = await fetch(api);
      const data = await resp.json();
      setData(data);
    } catch (err) {
      setError(err);
    }
  }
  return { data, error };
};
export default useFetch;
