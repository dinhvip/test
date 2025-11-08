export interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension?: number;
    fill?: boolean;
}

export interface ChartData {
    labels: string[];
    datasets: Dataset[];
}

export interface ChartParams {
    startDate?: string;
    endDate?: string;
    type?: string;
    category?: string;
    limit?: number;
    [key: string]: any;
}