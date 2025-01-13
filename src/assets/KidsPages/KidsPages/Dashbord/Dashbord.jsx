import React from 'react';
import { useNavigate } from "react-router-dom";
import  './dashbord.css';
import teacher from './Teacher.png'
import PhysicTopic from '../Cards/Physique/PhysicTopic';
import EnglishTopic from '../Cards/English/EnglishTopic';
import FrenchTopic from '../Cards/French/FrenchTopic';
import MathTopic from '../Cards//Math/MathTopic';




 const Dashboard = () => {
   const navigate = useNavigate();
  
    const handleSave = () => {
      // Redirige vers la page Dashboard
      navigate("/consulter");
    };
  return (
    <div className="dashboard2">
      <div className="content2">
        <aside className="sidebar2">
          <div className="userProfile2">
            <div className="profileWrapper2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="profileBackground2" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className="avatar2" />
              <div className="userInfo2">
                <span className="userName2">Sahar ketata</span>
                <span className="userId2">159874</span>
              </div>
            </div>
            <div className="menuItem2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="menuBackground2"/>
              <span>Mes cours</span>
            </div>
            <div className="logoutWrapper2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className="logoutIcon2" />
              <span tabIndex="0" role="button" className="logoutText2">Log out</span>
            </div>
          </div>
        </aside>
        
        <main className="mainContent2">
        <div className='photo2'> 
            <img  src={teacher} alt='teacher' className='front2' />
    
          </div>
          <div className="courseSection2">
            <h1 className="course2">Course</h1>
            <div className="courseGrid2">
              <div className="courseList2">
                <h2 className="courseName2">Course Name</h2>
                <div className="courseCards2">
            
                <button className='btnmath' onClick={handleSave}> <MathTopic /></button> 
                 <FrenchTopic />
                 <EnglishTopic />
                 <FrenchTopic />
                 <PhysicTopic />
                <EnglishTopic />
                
                 
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard ;