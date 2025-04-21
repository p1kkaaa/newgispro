import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="title-2">Что мы можем</h2>
        </div>
                <h2 className="title__muted">Мы рады предложить Вам следующие виды услуг:</h2>
        <div className="services__grid">
          <div className="services__column">
            <h3>IT и разработка под ключ</h3>
            <ul>
              <li><span>📋</span> Анализ, аудит, подготовка технической документации</li>
              <li><span>🎨</span> UI/UX-дизайн и проектирование интерфейсов</li>
              <li><span>🌐</span> Разработка веб-сервисов, мобильных и корпоративных приложений</li>
              <li><span>🔌</span> Внедрение API, интеграция с внешними системами</li>
              <li><span>⚙️</span> DevOps, настройка серверов, CI/CD</li>
              <li><span>🛠️</span> Сопровождение, техническая поддержка</li>
            </ul>
          </div>

          <div className="services__column">
            <h3>Геодезия и ГИС</h3>
            <ul>
              <li><span>📐</span> Топографическая съёмка и геодезические изыскания</li>
              <li><span>📷</span> Работа с современными геодезическими приборами</li>
              <li><span>📍</span> Определение координат объектов и построение 3D-моделей</li>
              <li><span>🗺️</span> Сканирование, векторизация и создание электронно-цифровых карт</li>
              <li><span>🌍</span> Разработка ГИС-порталов и публикация данных в интернете</li>
              <li><span>🗃️</span> Работа с базами пространственных данных</li>
            </ul>
          </div>

          <div className="services__column">
            <h3>Проектирование и строительство</h3>
            <ul>
              <li><span>🏗️</span> Разработка генеральных планов населённых пунктов</li>
              <li><span>🏠</span> Проектирование жилых и общественных зданий</li>
              <li><span>🔑</span> Комплексная реализация проектов «под ключ»</li>
              <li><span>🏢</span> Строительство жилых комплексов и инфраструктурных объектов</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
