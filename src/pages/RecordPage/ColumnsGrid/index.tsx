import type { FC } from 'react';
import styles from './ColumnsGrid.module.css';

interface Column {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tag: string;
    date: string;
}

interface ColumnsGridProps {
    columns: Column[];
    loading?: boolean;
}

const ColumnsGrid: FC<ColumnsGridProps> = ({ columns, loading = false }) => {
    if (loading) {
        return (
            <div className={styles.grid}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={styles.skeletonImage} />
                        <div className={styles.skeletonInfo}>
                            <div className={styles.skeletonDate} />
                            <div className={styles.skeletonTag} />
                            <div className={styles.skeletonTitle} />
                            <div className={styles.skeletonDescription} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (columns.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <p>No columns found.</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {columns.map((col) => (
                <div key={col.id} className={styles.card}>
                    <img src={col.imageUrl} alt={col.title} className={styles.image} />
                    <div className={styles.info}>
                        <p className={styles.date}>{new Date(col.date).toLocaleDateString()}</p>
                        <p className={styles.tag}>{col.tag}</p>
                        <h2 className={styles.cardTitle}>{col.title}</h2>
                        <p className={styles.description}>{col.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ColumnsGrid;
export type { Column, ColumnsGridProps };
