import styles from './Cardpage.module.css';
import dom01img from './../../img/photo/1.jpg';
import { useTranslation } from 'react-i18next';


const Cardpage = () => {
const { t } = useTranslation()
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={dom01img} alt="Dom" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            {t('cardpage.cardpovertxt')}
          </p>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{t('cardpage.cardptit')}</div>
          <div className={styles.card__muted}>{t('cardpage.cardpmute')}</div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
