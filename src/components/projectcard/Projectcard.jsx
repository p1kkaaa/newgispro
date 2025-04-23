import styles from './Projectcard.module.css';
import bg05img from './../../img/photo/bg5.jpg'
import arrowimg from './../../img/icon/arrow.svg'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projectcard = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()

  const handleClick = () => {
    navigate('/projectpage'); 
  }

  return (
    <div className={styles.projectcard}>
      <div className={styles.projectcard__imageWrapper}>
        <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
        <div className={styles.projectcard__overlay}>
          <p className={styles.projectcard__overlayText}>
            {t('projectcard.overtxt')}
          </p>
          <button onClick={handleClick} className={styles.projectcard__button}>
          {t('projectcard.btntext')}
          </button>
        </div>
      </div>
      <div className={styles.projectcard__body}>
        <div className={styles.projectcard__text}>
          <div className={styles.projectcard__title}>{t('projectcard.tittxt')}</div>
        </div>
        <button onClick={handleClick} className={styles.projectcard__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Projectcard;
