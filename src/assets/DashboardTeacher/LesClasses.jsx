import React from 'react';
import styles from './Classes.module.css';
import ClassCard from './ClassCard';
import image from './Group 237658.png';

const classesData = [
    {
        title: 'Classe 1ere',
        tasks: 10,
        percentage: 84,
        color: 'blue'
    },
    {
        title: 'Classe 4eme',
        tasks: 10,
        percentage: 84,
        color: 'pink'
    },
    {
        title: 'Classe 5eme',
        tasks: 10,
        percentage: 94,
        color: 'green'
    }
];

function Classes() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebar}>
                    <div className={styles.profileSection}>
                        <div className={styles.profileImage}  >
                            <img src={image} alt="Profile" />
                        </div>
                        <div className={styles.userName}>Samantha</div>
                        <div className={styles.userEmail}>samantha@email.com</div>
                    </div>
                    <nav className={styles.navigation}>
                        <button className={styles.navButton}>Classes</button>
                    </nav>
                </div>
                <main className={styles.mainContent}>
                    <div className={styles.header}>
                        <div className={styles.greeting}>Hello Evano 👋🏼,</div>
                        <div className={styles.searchBox}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5ef1e36abca11d6063e3a4ab39e22f1775dfce78d82af94045cafd90550086?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                className={styles.searchIcon}
                                alt="Search icon"
                            />
                            <input
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <h1 className={styles.title}>Les Classes</h1>
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardsGrid}>
                            {classesData.map((classData, index) => (
                                <div key={index} className={styles.column}>
                                    <ClassCard {...classData} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.containerimg}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/265e205464e3b0ab1b88efd0236361e1b924f4753081341754595c2fd5a9aa91?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                            className={styles.footerImage}
                            alt="Decorative footer illustration"
                        />
                    </div>

                </main>
            </div>
        </div>
    );
}

export default Classes;