import React from 'react';
import { TeacherCard } from './AdminCard';
import { SearchBar } from './SearchBar';
import { StatCard } from './StatCard';
import styles from './Dashboard.module.css';

const teacherData = [
  { name: 'Jane Cooper', phone: '(225) 555-0118', isActive: true },
  { name: 'Floyd Miles', phone: '(205) 555-0100', isActive: false },
  { name: 'Ronald Richards', phone: '(302) 555-0107', isActive: false },
  { name: 'Marvin McKinney', phone: '(252) 555-0126', isActive: true }
];

export const Dashboard = () => {
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
            <button className={styles.navButton}>Accounts</button>
            <button className={styles.navButton}>Clubs</button>
            <button className={styles.navButton}>Chapters</button>
            <button className={styles.navButton}>Classes</button>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼,</h1>
            <SearchBar />
          </header>
          
          <section className={styles.statsSection}>
            <StatCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fc59ec3a6b4b5f238e2d44da0adae095fe57a3bd9abf181ecd754aab4aad113f?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              title="Total Teachers"
              value="5,423"
              growth="16%"
            />
            <div className={styles.statDivider} />
            <StatCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0d0c9aa24e9a8047696c9440a27509fb6a0853fec5f83a2c9397cd2e08c42263?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              title="Active Now"
              value="189"
            />
          </section>

          <section className={styles.teachersSection}>
            <div className={styles.teachersHeader}>
              <h2 className={styles.teachersTitle}>All Teachers</h2>
              <div className={styles.teachersActions}>
                <SearchBar />
                <button className={styles.addButton} aria-label="Add new teacher">+</button>
              </div>
            </div>
            
            <div className={styles.teachersTable}>
              <div className={styles.tableHeader}>
                <div className={styles.columnHeader}>Teacher Name</div>
                <div className={styles.columnHeader1}>Phone Number</div>
                <div className={styles.columnHeader2}>Actions</div>
              </div>
              
              {teacherData.map((teacher, index) => (
                <TeacherCard
                  key={index}
                  name={teacher.name}
                  phone={teacher.phone}
                  isActive={teacher.isActive}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};