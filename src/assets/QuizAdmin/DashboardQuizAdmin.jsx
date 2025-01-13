import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ClassesCard } from './components/ClassesCard';
import styles from './DashboardLayout.module.css';

const Quiz = [
  { name: 'Robotics', classe: '2éme' },
  { name: 'Aviation', classe: '2éme' },
  { name: 'Software', classe: '5éme' },
  { name: 'VR/XR ', classe: '3éme' }
];

export const DashboardQuizAdmin = () => {
  const navigate = useNavigate();

  const handleAddTeacher = (e) => {
    e.preventDefault();
    navigate(`/AjouterQuiz`);
  };

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
            <button className={styles.navButton}>Quiz</button>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼</h1>
            <SearchBar />
          </header>
          <section className={styles.clubsContainer}>
            <div className={styles.clubsHeader}>
              <h2 className={styles.clubsTitle}>All Quiz</h2>
              <button
                className={styles.addButton}
                aria-label="Add new Quiz"
                onClick={handleAddTeacher}
              >
                +
              </button>
            </div>
            {Quiz.map((quizItem, index) => (
              <ClassesCard
                key={index}
                schoolName={quizItem.name}
                classe={quizItem.classe}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
