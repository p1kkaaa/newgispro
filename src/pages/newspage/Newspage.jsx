import './newspage.css'
import Cardpage from '../cardpage/Cardpage';
import Footerpage from '../footerpage/Footerpage';
import { useTranslation } from 'react-i18next';

const Newspage = () => {
  const { t } = useTranslation()
    return <>
    <section className='newspage'>
      <div className="container">
        <div className="newspage__header">
  
          <h2 className="title-2">{t('newspage.newstpage')}</h2>
  
        </div>
        <div className="newspage__card">

          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />



        </div>
      </div>
    </section>
    <Footerpage />

    </>
  }
   
  export default Newspage;