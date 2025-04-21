import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom';
import './header.css';
import logo from './../../img/logo/logo.jpg';
import ruFlag from './../../img/icon/ru.png';
import enFlag from './../../img/icon/en.png';
import kgFlag from './../../img/icon/kg.png';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ru');
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation()

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setCurrentLang(savedLang);
    } else {
      setCurrentLang('ru');
      localStorage.setItem('lang', 'ru');
    }
  }, []);

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

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('lang', lang);
    setIsLangMenuOpen(false);
  };

  const getFlagSrc = (lang) => {
    switch (lang) {
      case 'ru': return ruFlag;
      case 'en': return enFlag;
      case 'kg': return kgFlag;
      default: return ruFlag;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-switcher') && !e.target.closest('.lang-menu-portal')) {
        setIsLangMenuOpen(false);
      }
    };
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen]);

  return (
    <>
      <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="container">
          <div className="header__row">

            <Link to="/" className="header__logo" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo" />
              <span>GISPRO</span>
            </Link>

            <div className="header__right">
              {/* Бургер */}
              <button
                className="burger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Открыть меню"
              >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
              </button>

              {/* Навигация */}
              <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`} role="navigation">
                <ul>
                  <li><Link to="/newspage" onClick={() => setIsMenuOpen(false)}>Новости</Link></li>
                  <li><button onClick={() => scrollToSection('#services')}>Услуги</button></li>
                  <li><button onClick={() => scrollToSection('#about')}>О нас</button></li>
                  <li><Link to="/projectpage" onClick={() => setIsMenuOpen(false)}>Проекты</Link></li>
                  <li><button onClick={() => scrollToSection('#achievement')}>Достижения</button></li>
                  <li><button onClick={() => scrollToSection('#partners')}>Наши партнеры</button></li>
                  <li><button onClick={() => scrollToSection('#requisite')}>Реквизиты</button></li>
                  <li><Link to="/monitoringpage" onClick={() => setIsMenuOpen(false)}>Мониторинг</Link></li>
                </ul>
              </nav>

              {/* Языковая иконка */}
              <div className="lang-switcher">
                <img
                  src={getFlagSrc(currentLang)}
                  alt="lang"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="lang-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Портал меню языков */}
      {isLangMenuOpen &&
        ReactDOM.createPortal(
          <div className="lang-menu-portal">
            <img src={ruFlag} alt="Русский" onClick={() => handleLangChange('ru')} />
            <img src={enFlag} alt="English" onClick={() => handleLangChange('en')} />
            <img src={kgFlag} alt="Кыргызча" onClick={() => handleLangChange('kg')} />
          </div>,
          document.body
        )
      }
    </>
  );
}

export default Header;
