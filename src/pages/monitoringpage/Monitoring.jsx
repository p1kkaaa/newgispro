import './monitoring.css'

import MonitoringL from '../monitoringmap/MonitoringL';
import MonitoringLnofunc from '../monitoringmap/MonitoringLnofunc';
import Footerpage from '../footerpage/Footerpage';
import { useTranslation } from 'react-i18next';



const Monitoring = () => {
    const { t } = useTranslation()
    return  <>
        <section className="monitor">
            <div className="container">
                <div className="monitor__header">

                <h2 className="title-2">{t('monitor.monitortit')}</h2>

            </div>
                <div className="monitor__map">

                <MonitoringL />
                {/* <MonitoringLnofunc /> */}

                </div>
            </div>
        </section>
        <Footerpage />
    </>
     
}
 
export default Monitoring
