import React from 'react';
import styles from './ajoutEnfant.module.css';
import image from './Group 237658.png';

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
                    <h1 className={styles.title}>Ajouter enfant</h1>
                    <div className={styles.inputGroup}>
                        <label htmlFor="childName" className={styles.inputLabel}>
                            Nom Enfant <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="childName"
                            className={styles.textInput}
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="matricule" className={styles.inputLabel}>
                            Matricule <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="matricule"
                            className={styles.selectInput}
                            required
                            aria-required="true"
                        >
                            <option value="">Seleccionar</option>
                        </select>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button type="button" className={styles.cancelButton}>
                            Annuler
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Enregistrer
                        </button>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default Classes;