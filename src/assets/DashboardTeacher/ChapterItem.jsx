import React from 'react';
import styles from './ChapterItem.module.css';

export const ChapterItem = ({ iconSrc, title, alt }) => {
    return (
        <div className={styles.chapterContainer}>
            <img
                loading="lazy"
                src={iconSrc}
                className={styles.chapterIcon}
                alt={alt}
            />
            <div className={styles.chapterTitle}>{title}</div>
        </div>
    );
};