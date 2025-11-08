import React, { useEffect, useState } from "react";
import styles from "./RecordPage.module.css";
import { useChartData } from "../../hooks/chart/useChartData.js";
import { formatCurrency } from "../../components/charts/LineChart/chartHelpers.js";
import LineChart from "../../components/charts/LineChart/LineChart.js";
import ColumnsGrid, { type Column } from "./ColumnsGrid";

const RecordPage: React.FC = () => {
    const [columns, setColumns] = useState<Column[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { data, loadingChart, errorChart } = useChartData('/api/charts/revenue', {
        startDate: '2025-01-01',
        endDate: '2025-11-08'
    });

    const customOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
                    }
                }
            }
        }
    };

    // Giả lập dữ liệu (sau này có thể gọi API thật)
    useEffect(() => {
        const fetchColumns = async () => {
            try {
                // Giả lập delay để test loading state
                await new Promise(resolve => setTimeout(resolve, 1000));

                const mockData: Column[] = [
                    {
                        id: 1,
                        title: "Healthy Morning Habits",
                        description: "Start your day with a balanced breakfast and light stretching.",
                        imageUrl: "/images/column1.jpg",
                        tag: "#Morning",
                        date: "2025-11-01",
                    },
                    {
                        id: 2,
                        title: "Tips to Improve Sleep Quality",
                        description: "Learn how to get better rest by adjusting your sleep environment.",
                        imageUrl: "/images/column2.jpg",
                        tag: "#Sleep",
                        date: "2025-11-02",
                    },
                    {
                        id: 3,
                        title: "Healthy Eating in Busy Life",
                        description: "Quick and nutritious meal ideas for people with tight schedules.",
                        imageUrl: "/images/column3.jpg",
                        tag: "#Nutrition",
                        date: "2025-11-03",
                    },
                ];
                setColumns(mockData);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred while fetching data");
                setLoading(false);
            }
        };

        fetchColumns();
    }, []);

    if (loading) {
        return (
            <div className={styles.container}>
                <ColumnsGrid columns={[]} loading={true} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.errorContainer}>
                    <p className={styles.errorMessage}>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ColumnsGrid columns={columns} loading={false} />
            <div className="bg-white rounded-lg shadow-md p-6">
                <LineChart
                    labels={data.labels}
                    datasets={data.datasets}
                    options={customOptions}
                    height="400px"
                    title="Báo cáo doanh thu"
                    loading={loadingChart}
                    error={errorChart}
                />
            </div>

        </div>
    );
};

export default RecordPage;