import { useTranslation } from 'react-i18next';
import './about.css'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <h2 className="title-2">{t('about.abouttit')}</h2>
        </div>

        <div className="about__content">
          <p>
          {t('about.aboutc1')}
          </p>
          <p>
          {t('about.aboutc2')}
          </p>
          <p>
          {t('about.aboutc3')}
          </p>
          <p>
          {t('about.aboutc4')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;