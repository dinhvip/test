import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
