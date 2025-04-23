import { useEffect, useRef } from "react";
import bgImage from "./../../img/photo/bg5.jpg";
import "./parallax.css";
import { useTranslation } from 'react-i18next';
const Parallax = () => {
  const imageRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollTop * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="promo__title">
            {t('parallax.title')}
          </div>
          <div className="promo__derec">
          {t('parallax.derec')}
          </div>
        </div>
        <div className="promo_img">
          <img
            ref={imageRef}
            className="picture parallax-image"
            src={bgImage}
            alt="Promo"
          />
        </div>
      </div>
    </section>
  );
};

export default Parallax;
