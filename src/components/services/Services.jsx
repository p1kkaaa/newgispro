import React from 'react'
import './services.css'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation()
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="title-2">{t('services.servtit')}</h2>
        </div>
                <h2 className="title__muted">{t('services.servmut')}</h2>
        <div className="services__grid">
          <div className="services__column">
            <h3>{t('services.servcolum')}</h3>
            <ul>
              <li><span>📋</span> {t('services.servit')}</li>
              <li><span>🎨</span> {t('services.servit2')}</li>
              <li><span>🌐</span> {t('services.servit3')}</li>
              <li><span>🔌</span> {t('services.servit4')}</li>
              <li><span>⚙️</span> {t('services.servit5')}</li>
              <li><span>🛠️</span> {t('services.servit6')}</li>
            </ul>
          </div>

          <div className="services__column">
            <h3>{t('services.servcolum2')}</h3>
            <ul>
              <li><span>📐</span> {t('services.servgis')}</li>
              <li><span>📷</span> {t('services.servgis2')}</li>
              <li><span>📍</span> {t('services.servgis3')}</li>
              <li><span>🗺️</span> {t('services.servgis4')}</li>
              <li><span>🌍</span> {t('services.servgis5')}</li>
              <li><span>🗃️</span> {t('services.servgis6')}</li>
            </ul>
          </div>

          <div className="services__column">
            <h3>{t('services.servcolum3')}</h3>
            <ul>
              <li><span>🏗️</span> {t('services.servpro')}</li>
              <li><span>🏠</span> {t('services.servpro2')}</li>
              <li><span>🔑</span> {t('services.servpro3')}</li>
              <li><span>🏢</span> {t('services.servpro4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
