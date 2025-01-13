import React from 'react';
import  './voircours.css';
import left from './gauche.png'
import rigth from './droite.png'

export const Cours = () => {
  return (
    <div className="dashboard">
    <div className="content">
      <aside className="sidebar">
        <div className="userProfile">
          <div className="profileWrapper">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="profileBackground" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className="avatar" />
            <div className="userInfo">
              <span className="userName">Sahar ketata</span>
              <span className="userId">159874</span>
            </div>
          </div>
          <div className="menuItem">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className="menuBackground"/>
            <span>Mes cours</span>
          </div>
          <div className="logoutWrapper">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className="logoutIcon" />
            <span tabIndex="0" role="button" className="logoutText">Log out</span>
          </div>
        </div>
      </aside>
        <main className="mainContent">
          <div className="courseContainer">
            <div className="courseContent">
              <div className="courseHeader">
                <h1 className="courseTitle">
                  The concept of the environmental environment - Science
                </h1>
                <h2 className="courseSubtitle">Cour 1 :</h2>
                <div className='btn'>
                    <button className='btn_left'><img src={left}/></button>
                    <button className='btn_rigth'><img src={rigth}/></button>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e4c0a5d4df2878d504031f46239bd2d50e23d7689123384a588f846117663c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                  alt="Environmental science course cover"
                  className="courseCover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Cours ;