import React from 'react';
import styles from './RecommendedColumn.module.scss';

interface RecommendedColumnProps {
  category: string;
  subtitle: string;
  className?: string;
}

const RecommendedColumn: React.FC<RecommendedColumnProps> = ({ 
  category, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      <h2 className={styles.title}>
        RECOMMENDED<br />{category}
      </h2>
      <div className={styles.divider}></div>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
    </div>
  );
};

export default RecommendedColumn;
