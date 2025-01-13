import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectField } from './components/SelectField';
import QuizBuilder from './QuizBuilder';
import styles from './Dashboard.module.css';

export const DashboardAjouterQuiz = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage} />
            <div className={styles.userName}>Samantha</div>
            <div className={styles.userEmail}>samantha@email.com</div>
          </div>
          <nav className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/AccountAdmin')}
            >
              Accounts
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ClubsAdmin')}
            >
              Clubs
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ChaptersAdmin')}
            >
              Chapters
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ClassesAdmin')}
            >
              Classes
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/QuizAdmin')}
            >
              Quiz
            </button>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼</h1>
            <div className={styles.searchBox}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a2d5994f3e7591026d17b75e05a400996b2106b14f2cd9dad3595ff535358b?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
                alt="Search Icon"
                className={styles.searchIcon}
              />
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </header>

          <form className={styles.formContainer}>
            <div className={styles.formField}>
              <SelectField label="Chapter name" required={true} />
            </div>
            <div className={styles.formField}>
              <SelectField label="Quiz name" required={true} />
            </div>
            <QuizBuilder />

            
          </form>
        </main>
      </div>
    </div>
  );
};
