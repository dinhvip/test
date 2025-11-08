// ExerciseLog.tsx
import React from 'react';
import styles from './ExerciseLog.module.css';

interface Exercise {
  name: string;
  calories: string;
  duration: string;
}

const ExerciseLog: React.FC = () => {
  const exercises: Exercise[] = [
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' },
    { name: '家事全般（立位・軽い）', calories: '26kcal', duration: '10 min' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          MY<br/>EXERCISE
        </h2>
        <h1 className={styles.date}>2021.05.21</h1>
      </div>
      
      <div className={styles.grid}>
        {exercises.map((exercise, index) => (
          <div key={index} className={styles.exerciseItem}>
            <div className={styles.exerciseInfo}>
              <p className={styles.exerciseName}>{exercise.name}</p>
              <p className={styles.calories}>{exercise.calories}</p>
            </div>
            <div className={styles.duration}>{exercise.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLog;