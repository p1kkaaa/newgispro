import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './header.css';
import logo from './../../img/logo/logo.jpg';
import ruFlag from './../../img/icon/ru.png';
import enFlag from './../../img/icon/en.png';
import kgFlag from './../../img/icon/kg.png';

import { useTranslation } from 'react-i18next';
import i18n from './../../i18n/i18n';

function Header() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language || 'ru';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const scrollToSection = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const getFlagSrc = (lang) => {
    switch (lang) {
      case 'ru': return ruFlag;
      case 'en': return enFlag;
      case 'kg': return kgFlag;
      default: return ruFlag;
    }
  };

  const handleLangCycle = () => {
    const langs = ['ru', 'en', 'kg'];
    const currentIndex = langs.indexOf(currentLang);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header__row">

          <Link to="/" className="header__logo" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" />
            <span>GISPRO</span>
          </Link>

          <div className="header__right">
            <button
              className="burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Открыть меню"
            >
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </button>

            <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`} role="navigation">
              <ul>
                <li><Link to="/newspage" onClick={() => setIsMenuOpen(false)}>{t('nav.news')}</Link></li>
                <li><button onClick={() => scrollToSection('#services')}>{t('nav.services')}</button></li>
                <li><button onClick={() => scrollToSection('#about')}>{t('nav.about')}</button></li>
                <li><Link to="/projectpage" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link></li>
                <li><button onClick={() => scrollToSection('#achievement')}>{t('nav.achievements')}</button></li>
                <li><button onClick={() => scrollToSection('#partners')}>{t('nav.partners')}</button></li>
                <li><button onClick={() => scrollToSection('#requisite')}>{t('nav.requisites')}</button></li>
                <li><Link to="/monitoringpage" onClick={() => setIsMenuOpen(false)}>{t('nav.monitoring')}</Link></li>
              </ul>
            </nav>

            <div className="lang-switcher">
              <img
                src={getFlagSrc(currentLang)}
                alt="lang"
                onClick={handleLangCycle}
                className="lang-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
