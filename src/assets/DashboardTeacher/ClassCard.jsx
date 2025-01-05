import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClassCard.module.css";

const ClassCard = ({ className, title, tasks, percentage, color }) => {
    const navigate = useNavigate();

    const cardColorClass = {
        blue: styles.cardBlue,
        pink: styles.cardPink,
        green: styles.cardGreen,
    }[color];

    const handleCardClick = () => {
        navigate(`/class-details/${title}`); // Redirige vers la page des détails de la classe
    };

    return (
        <div className={`${styles.card} ${cardColorClass}`} onClick={handleCardClick}>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.stats}>
                <span>{tasks} Task</span>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/737dcb82c68edcda873124ed37537ccaf7985ce621dd79314363b0bdb7cea9a8?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                    className={styles.divider}
                    alt=""
                />
                <span>{percentage}%</span>
            </div>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar} />
            </div>
        </div>
    );
};

export default ClassCard;
