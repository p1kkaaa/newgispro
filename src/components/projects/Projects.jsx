import { useTranslation } from 'react-i18next';
import Projectcard from '../projectcard/Projectcard';
import './projects.css'



const Projects = () => {
  const { t } = useTranslation()
  return <section className='project'>
    <div className="container">
      <div className="project__header">

        <h2 className="title-2">
        {t('projects.projtxt')}
        </h2>

      </div>
      <div className="project__card">
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  </section>;
}
 
export default Projects;