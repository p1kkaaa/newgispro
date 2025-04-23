import Map from '../mapcard/Map';
import './requisite.css';
import inst from "./../../img/icon/instagram.png";
import face from "./../../img/icon/facebook.png";
import mail from "./../../img/icon/gmail.png";
import { useTranslation } from 'react-i18next';



const Requisite = () => {
    const { t } = useTranslation()
    return ( 
        <section className="requisite" id="requisite">
            <div className="container">
                <div className="requi__header">
                    <h2 className="title-2">{t('requisite.requtxt')}</h2>
                </div>
                
                <div className="requi__content">
                    
                    <div className="requi__block">
                        <h3>{t('requisite.requcont')}</h3>
                        <ul>
                            <li><span>📞</span>+996 700 600 645</li>
                            <li><span>📞</span>+996 508 598 887</li>
                            <li><span>📞</span>+996 771 777 787</li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>{t('requisite.requsoci')}</h3>
                        <ul className="social-links">
                            <li>
                                <a href="https://www.instagram.com/gispro.kg/" target="_blank" rel="noopener noreferrer">
                                    <img src={inst} alt="Instagram" />
                                </a>
                                Instagram
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gispro.kg/" target="_blank" rel="noopener noreferrer">
                                    <img src={face} alt="Facebook" />
                                </a>
                                Facebook
                            </li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>{t('requisite.requadres')}</h3>
                        <ul>
                            <li><span>📍</span>{t('requisite.requcity')}</li>
                            <li><span>🗓️</span>{t('requisite.requgraf')}</li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>Email:</h3>
                        <ul>
                            <li>
                                <a href="qweq" target="_blank" rel="noopener noreferrer">
                                    <img src={mail} alt="Twitter" />
                                </a>
                                gispro51@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="requi__map">
                            <Map />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Requisite;


