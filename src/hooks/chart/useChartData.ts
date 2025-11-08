// src/hooks/useChartData.js
import { useState, useEffect, useCallback } from 'react';
import { fetchChartData, type ChartData } from '../../services/api/chartService';

export const useChartData = (endpoint: string, params: Record<string, any> = {}, autoFetch: boolean = true) => {
  const [data, setData] = useState<ChartData>({ labels: [], datasets: [], rawData: [] });
  const [rawData, setRawData] = useState<any[] | null>(null);
  const [loadingChart, setLoadingChart] = useState<boolean>(autoFetch);
  const [errorChart, setErrorChart] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoadingChart(true);
      setErrorChart(null);

      const response = await fetchChartData(endpoint, params);

      if (response.success && response.data) {
        setData(response.data);
        setRawData(response.data.rawData);
      } else {
        throw new Error(response.error?.message || 'Failed to fetch data');
      }
    } catch (err) {
      setErrorChart(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoadingChart(false);
    }
  }, [endpoint, JSON.stringify(params)]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return {
    data,
    rawData,
    loadingChart,
    errorChart,
    refetch: fetchData
  };
};