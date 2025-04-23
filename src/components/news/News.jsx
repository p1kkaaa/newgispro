import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import './news.css'



const News = () => {
  const { t } = useTranslation()
  return <section className='news'>
    <div className="container">
      <div className="news__header">

        <h2 className="title-2">
          {t('news.newstxt')}
          </h2>

      </div>
      <div className="news__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>;
}
 
export default News;