import styles from './Card.module.css';
import dom01img from './../../img/photo/1.jpg'
import arrowimg from './../../img/icon/arrow.svg'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const Card = () => {
  const navigate = useNavigate(); 
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/newspage'); 
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={dom01img} alt="Dom" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            {t('card.cardover')}
          </p>
          <button onClick={handleClick} className={styles.card__button}>
            {t('card.cardbtn')}
          </button>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{t('card.cardtit')}</div>
        </div>
        <button onClick={handleClick} className={styles.card__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
};

export default Card;