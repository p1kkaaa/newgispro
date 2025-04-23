import './partners.css';
import logo1 from "./../../img/logo/partners.png"
import logo2 from "./../../img/logo/partners.png"
import logo3 from "./../../img/logo/partners.png"
import { useTranslation } from 'react-i18next';



const Partners = () => {
  const { t } = useTranslation();
    return (  
        <section className="part" id="partners">
            <div className="container">
                <div className="part__header">
        
                <h2 className="title-2">
                    {t('partners.part_tit')}
                </h2>

                </div>
                <ul className="part__list">
                    <li><a href="#!"><img src={ logo1 } alt="" /></a></li>
                    <li><a href="#!"><img src={ logo2 } alt="" /></a></li>
                    <li><a href="#!"><img src={ logo3 } alt="" /></a></li>
                </ul>
                <div className="part__muted">
                {t('partners.part_mute')}
                {/* Ознакомьтесь с некоторыми из наших парнетров и с компаниями с которыми мы сотрудничаем */}
                </div>
            </div>
        </section>
    );
}
 
export default Partners;