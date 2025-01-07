import { useState, useEffect, useCallback } from "react";

export function useFetch<TData = unknown>(
  path: string,
  runOnMount: boolean = true,
) {
  const [data, setData] = useState<TData | null>(null);
  const [benchmark, setBenchmark] = useState("");
  const [loading, setLoading] = useState<boolean>(runOnMount);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const start = performance.now();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + path);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const json = await response.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
    const end = performance.now();
    setBenchmark((end - start).toFixed(1) + " ms");
  }, [path]);

  // Fetch data on mount if runOnMount is true
  useEffect(() => {
    if (runOnMount) {
      fetchData();
    }
  }, [fetchData, runOnMount]);

  return { loading, error, benchmark, data, refetch: fetchData };
}
