import type { ChartOptions } from 'chart.js';

export interface Dataset {
    label?: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth?: number;
    pointRadius?: number;
    pointHoverRadius?: number;
    pointBorderWidth?: number;
    pointBackgroundColor?: string;
    tension?: number;
    fill?: boolean;
    pointBorderColor?: string;
}

export interface LineChartProps {
    labels: string[];
    datasets: Dataset[];
    options?: ChartOptions<'line'>;
    height?: string;
    title?: string | null;
    loading?: boolean;
    error?: string | null;
}