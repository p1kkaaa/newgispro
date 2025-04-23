import { useState, useEffect, useRef } from 'react';
import bag from './../../img/objectlogo/bag.png';
import clock from './../../img/objectlogo/ClockHistory.png';
import person from './../../img/objectlogo/PersonCheck.png';
import './achievement.css';
import { useTranslation } from 'react-i18next';

const Achievement = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const { t } = useTranslation()
    const achievementRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {

        const animateNumber = (start, end, setState) => {
            const duration = 700;
            const totalFrames = duration / 10;
            const increment = (end - start) / totalFrames;
            let current = start;
            let frame = 0;

            const interval = setInterval(() => {
                current += increment;
                frame++;

                if (frame >= totalFrames) {
                    clearInterval(interval);
                    current = end;
                }

                setState(Math.round(current));
            }, 10);
        };


        if (isVisible) {
            animateNumber(0, 11, setExperience);
            animateNumber(0, 100, setProjects);
            animateNumber(0, 1200, setClients);
        }
    }, [isVisible]); 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); 
            },
            {
                threshold: 0.5, 
            }
        );

        if (achievementRef.current) {
            observer.observe(achievementRef.current);
        }

        
    }, []);

    return (  
        <section className="achiev-block" id="achievement" ref={achievementRef}>
            <h3 className="title-2">{t('achiev.achietit')}</h3>
            <h3 className="title">{t('achiev.achietit2')}</h3>
            <div className="achiev-row">
                <div className="achiev-item">
                    <img src={bag} alt="Иконка часов" />
                    <h4 className="counter">{experience} +</h4>
                    <p>{t('achiev.achiecount')}</p>
                </div>
                <div className="achiev-item">
                    <img src={clock} alt="Иконка портфеля" />
                    <h4 className="counter">{projects} +</h4>
                    <p>{t('achiev.achiecount2')}</p>
                </div>
                <div className="achiev-item">
                    <img src={person} alt="Иконка человека" />
                    <h4 className="counter">{clients} +</h4>
                    <p>{t('achiev.achiecount3')}</p>
                </div>
            </div>
                <div className="achiev__muted">
                {t('achiev.achiemute')}
                </div>
        </section>
    );
};

export default Achievement;
