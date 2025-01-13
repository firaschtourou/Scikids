
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ClubCard } from './components/ClubCard';
import styles from './DashboardLayout.module.css';

const clubs = [
  { name: 'Robotics' },
  { name: 'Aviation' },
  { name: 'Software' },
  { name: 'VR/XR' }
];

export const DashboardClubsAdmin = () => {
  const navigate = useNavigate();
  const handleAddTeacher = (e) => {
    e.preventDefault();
    navigate(`/AjouterClub`); 
  };

  const handleNavigation = (path) => {
    navigate(path); // Fonction pour naviguer vers un chemin donné
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
              <button className={styles.navButton}
               onClick={() => handleNavigation('/ClubsAdmin')}
               >
                Clubs
               </button>
<button className={styles.navButton}
            onClick={() => handleNavigation('/ChaptersAdmin')}>Chapters</button>            
              <button className={styles.navButton}
              onClick={() => handleNavigation('/ClassesAdmin')}
              >Classes</button>
              <button className={styles.navButton}
                          onClick={() => handleNavigation('/QuizAdmin')}>Quiz</button>
            </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼</h1>
            <SearchBar />
          </header>
        
        <section className={styles.clubsContainer}>
          <div className={styles.clubsHeader}>
            <h2 className={styles.clubsTitle}>All Clubs</h2>
            <button className={styles.addButton}
                    aria-label="Add new club" 
                    onClick={handleAddTeacher}
            >
              +
            </button>
          </div>
          
          {clubs.map((club, index) => (
            <ClubCard key={index} clubName={club.name} />
          ))}
        </section>
        </main>
      </div>
    
  </div>
    
  );
};