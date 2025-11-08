import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  gradient?: 'purple' | 'blue' | 'green';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText = 'Get Started',
  onButtonClick,
  gradient = 'purple'
}) => {
  const gradientClass = styles[`gradient-${gradient}`];

  return (
    <div className={`${styles.card} ${gradientClass}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <button 
        className={styles.button}
        onClick={onButtonClick}
        type="button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;
