import React from 'react';
import styles from './ClassesCard.module.css';

export const ClassesCard = ({ schoolName, classe }) => {
  return (
    <>
      <div className={styles.clubCard}>
        <span className={styles.clubName}>{schoolName}</span>
        <span className={styles.clubNamee}>{classe}</span>
        <div className={styles.actionButtons}>
          <button className={styles.modifyButton}>Modify</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
};
