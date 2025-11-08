import { DEFAULT_CHART_OPTIONS, DEFAULT_DATASET_CONFIG } from './chartConfig';
import type { LineChartProps, Dataset } from './types';
import { Line } from 'react-chartjs-2';
import React from 'react';
import styles from './LineChart.module.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';


// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineChart: React.FC<LineChartProps> = ({
    labels = [],
    datasets = [],
    options = {},
    height = '300px',
    title = null,
    loading = false,
    error = null,
}) => {
    // Merge default dataset config with user datasets
    const formattedDatasets = datasets.map(dataset => ({
        ...DEFAULT_DATASET_CONFIG,
        ...dataset,
        pointBorderColor: dataset.borderColor,
    }));

    // Prepare chart data
    const chartData = {
        labels,
        datasets: formattedDatasets,
    };

    // Merge default options with custom options
    const chartOptions = {
        ...DEFAULT_CHART_OPTIONS,
        ...options,
        plugins: {
            ...DEFAULT_CHART_OPTIONS.plugins,
            ...options.plugins,
        },
        scales: {
            ...DEFAULT_CHART_OPTIONS.scales,
            ...options.scales,
        },
    };

    // Loading state
    if (loading) {
        return (
            <div
                style={{ height }}
                className={styles.loadingContainer}
            >
                <div className={styles.loadingContent}>
                    <div className={styles.loadingSpinner}></div>
                    <p className={styles.loadingText}>Đang tải dữ liệu...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div
                style={{ height }}
                className={styles.errorContainer}
            >
                <div className={styles.errorContent}>
                    <svg className={styles.errorIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className={styles.errorTitle}>Lỗi tải dữ liệu</p>
                    <p className={styles.errorDescription}>{error}</p>
                </div>
            </div>
        );
    }

    // Empty state
    if (!labels.length || !datasets.length) {
        return (
            <div
                style={{ height }}
                className={styles.emptyContainer}
            >
                <div className={styles.emptyContent}>
                    <svg className={styles.emptyIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className={styles.emptyTitle}>Không có dữ liệu</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.lineChart}>
            {title && (
                <h3 className={styles.lineChartTitle}>{title}</h3>
            )}
            <div style={{ height }} className={styles.chartContainer}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default LineChart