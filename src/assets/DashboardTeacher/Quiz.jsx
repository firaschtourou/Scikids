import React from "react";
import QuizBuilder from "./QuizBuilder"; // Assurez-vous que le fichier QuizBuilder est dans le même dossier ou modifiez le chemin.
import styles from "./Quiz.module.css"; // Remplacez "YourStyles.module.css" par le nom de votre fichier CSS.
import image from './Group 237658.png';
const App = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebar}>
                    <div className={styles.profileSection}>
                        <div className={styles.profileImage}>
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
                            <input type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                    <h1 className={styles.title}>Ajouter un quiz</h1>

                    {/* Ajout du constructeur de quiz */}
                    <div className={styles.quizBuilderContainer}>
                        <QuizBuilder />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
