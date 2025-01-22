import { useState } from "react";
import { useEffect } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const data = await fetchFn();

        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchData,
    error,
  };
}
