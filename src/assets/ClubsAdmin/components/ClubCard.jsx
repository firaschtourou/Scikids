import React from 'react';
import styles from './ClubCard.module.css';

export const ClubCard = ({ clubName }) => {
  return (
    <>
      <div className={styles.clubCard}>
        <span className={styles.clubName}>{clubName}</span>
        <div className={styles.actionButtons}>
          <button className={styles.modifyButton}>Modify</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
};