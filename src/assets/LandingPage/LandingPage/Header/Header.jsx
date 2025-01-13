import React, { useState } from 'react';
import Head from './Group 1.png'
import './header.css';

const Header = () => {
  const [language, setLanguage] = useState('français'); // État pour la langue sélectionnée

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Mise à jour de la langue
  };

  return (
    <div className="landingPage">
      <div className="header">
        <img
          alt="logo"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527"
          className="Logo"
        />
        <nav className="navbar">
          <ul>
            <li className="item">Home</li>
            <li className="item">About us</li>
            <li className="item">Our clubs</li>
            <li className="item">Gallery</li>
            <li className="item">Contact</li>
            <li className="item">

              <select
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
                className="language-dropdown"
              >
                <option value="anglais">Anglais</option>
                <option value="français">Français</option>
              </select>
            </li>
          </ul>
        </nav>

        <div className="icon">
          <a href="https://www.facebook.com/sciiikids" target="_blank" rel="noopener noreferrer">
            <img
              alt="facebook icon"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a03a8d33b728faab534788fce110bf2b8fbc23cf662fdeaec7eb988d5bc881e1?apiKey=ba0309dab51447bea3dfd91fdbb99527"
              className="facebook"
            />
          </a>
          <a href="https://www.instagram.com/scikids_tech_hub/?hl=fr" target="_blank" rel="noopener noreferrer">
            <img
              alt="instagram icon"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32501f0ed45354d1612582f01ee3935bf977444c88f80a40532b562bcb619e79?apiKey=ba0309dab51447bea3dfd91fdbb99527"
              className="instagram"
            />
          </a>
          <a href="https://www.tiktok.com/@scikids8" target="_blank" rel="noopener noreferrer">
            <img
              alt="tiktok icon"
              loading="lazy"
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7e788fe04dec9a99000884ac1005d60f4a948ddbdef026bf374ff8786e407?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b'
              className="tiktok"
            />
          </a>
          <a href="https://www.linkedin.com/company/sci-kids-technology-hub/" target="_blank" rel="noopener noreferrer">
            <img
              alt="linkedin icon"
              loading="lazy"
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/95b8945ea483324f805fea5acaa2925de6982f27bfc7d2681e445864e5182ade?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b'
              className="linkedin"
            />
          </a>
        </div>
      </div>
      <img src={Head} alt='img' className='head' />
    </div>
  );
};

export default Header;
