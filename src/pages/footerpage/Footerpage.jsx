import './footerpage.css'
import inst from "./../../img/icon/instagram.png"
import face from "./../../img/icon/facebook.png"
import twit from "./../../img/icon/twitter2.png"
import { useTranslation } from 'react-i18next'


const Footerpage = () => {
    const { t } = useTranslation()
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer__text">
                    {t('footerpage.footerptxt')}
                </div>
                <div className="social__btn">
                    <a href="https://www.instagram.com/gispro.kg/"><img src= {inst} alt="" /></a>
                    <a href="https://www.facebook.com/people/Gis-Pro-Kg/pfbid02cBu35SL2TeGDx8wRK5uigZs46pDcdJHMsbZHjjdhuSLbZCHE8nwULsMrk1yoCyhEl/?refsrc=deprecated" ><img src= {face} alt="" /></a>
                    <a href="https://x.com/gispro_kg/"><img src={ twit } alt="" /></a>
                </div>
                <button className="scroll" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    {t('footerpage.footerpscrl')}
                </button>
            </div>
        </div>
     );
}
 
export default Footerpage;