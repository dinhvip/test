import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './NotFoundPage.module.css';

interface NotFoundPageProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
}

const NotFoundPage: FC<NotFoundPageProps> = ({
  title = '404',
  message = 'Page Not Found',
  showBackButton = true,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/columns');
    }
  };

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.illustration}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.decorativeElement} ${styles.decorativeElement1}`} />
        <div className={`${styles.decorativeElement} ${styles.decorativeElement2}`} />
      </div>

      <h1 className={styles.message}>{message}</h1>

      <div className={styles.actions}>
        {showBackButton && (
          <button onClick={handleGoBack} className={`${styles.button} ${styles.buttonSecondary}`}>
            ← Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
export type { NotFoundPageProps };
