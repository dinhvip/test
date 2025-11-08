import type { ChartOptions } from 'chart.js';
import type { Dataset } from './types';

export const CHART_COLORS = {
    primary: '#FFC107',
    secondary: '#4DD0E1',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
};

export const DEFAULT_CHART_OPTIONS: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                    size: 12,
                    family: "'Inter', sans-serif",
                },
            },
        },
        tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('vi-VN').format(context.parsed.y);
                    }
                    return label;
                }
            }
        },
    },
    scales: {
        x: {
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 11,
                },
            },
        },
        y: {
            display: true,
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.05)',
            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 11,
                },
                callback: function (value: string | number) {
                    return new Intl.NumberFormat('vi-VN', {
                        notation: 'compact',
                        compactDisplay: 'short'
                    }).format(typeof value === 'string' ? parseFloat(value) : value);
                }
            },
        },
    },
};

/**
 * Default dataset configuration
 */
export const DEFAULT_DATASET_CONFIG: Partial<Dataset> = {
    borderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBorderWidth: 2,
    pointBackgroundColor: '#fff',
    tension: 0.4,
    fill: false,
};