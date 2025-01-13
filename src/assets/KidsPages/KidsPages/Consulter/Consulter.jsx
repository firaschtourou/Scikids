import React from 'react';
import { useNavigate } from "react-router-dom";
import  './consulter.css';
import { CourseCard } from './CourseCard';
import { QuizCard } from './QuizCard';

export const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleSave = () => {
    // Redirige vers la page Dashboard
    navigate("/Quiz");
  };
  const handleSave1 = () => {
    // Redirige vers la page Dashboard
    navigate("/voircours");
  };
  return (
    <div className="dashboard1">
    <div className="content1">
      <aside className="sidebar1">
        <div className="userProfile1">
          <div className="profileWrapper1">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="profileBackground1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className="avatar1" />
            <div className="userInfo1">
              <span className="userName1">Sahar ketata</span>
              <span className="userId1">159874</span>
            </div>
          </div>
          <div className="menuItem1">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="menuBackground1"/>
            <span>Mes cours</span>
          </div>
          <div className="logoutWrapper1">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className="logoutIcon1" />
            <span tabIndex="0" role="button" className="logoutText1">Log out</span>
          </div>
        </div>
      </aside>

        <main className="mainContent1">
          <div className="contentWrapper1">
            <h1 className="chapterTitle1">Chapter 1 -Science</h1>
            <div className="cardContainer1">
              <button onClick={handleSave1} className='btn1'><CourseCard title="The concept of the environmental environment" /></button>
              <button className='btn1' onClick={handleSave}><QuizCard /></button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard ;