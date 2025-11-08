import React from 'react';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  image: string;
  date: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  date,
  time,
  title,
  description,
  tags,
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`.trim()}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.dateTime}>
          {date} {time}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
