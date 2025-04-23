import { useTranslation } from 'react-i18next';
import './footer.css'



const Footer = () => {
    const { t } = useTranslation()
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer__text">
                {t('footer.footertxt')}
                </div>
                <button className="scroll" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                {t('footer.footerscrl')}
                </button>
            </div>
        </div>
     );
}
 
export default Footer;