import styles from './Projectcardpage.module.css';
import bg05img from './../../img/photo/bg5.jpg';
import { useTranslation } from 'react-i18next';

const Projectcardpage = () => {
  const { t } = useTranslation()
  return ( 
    <div className={styles.projectcard}>
      <div className={styles.projectcard__imageWrapper}>
        <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
        <div className={styles.projectcard__overlay}>
          <p className={styles.projectcard__overlayText}>
            {t('projectcardpage.projectcardover')}
          </p>
        </div>
      </div>
      <div className={styles.projectcard__body}>
        <div className={styles.projectcard__text}>
          <div className={styles.projectcard__title}>{t('projectcardpage.projectcardtit')}</div>
          <div className={styles.projectcard__muted}>{t('projectcardpage.projectcardmute')}</div>
        </div>
      </div>
    </div>
  );
};

export default Projectcardpage;


