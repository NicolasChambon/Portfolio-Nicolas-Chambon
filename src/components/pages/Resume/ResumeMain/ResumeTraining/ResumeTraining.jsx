import { useSelector } from 'react-redux';

import trainingIcon from '../../../../../assets/icons/training-icon.svg';

import './ResumeTraining.scss';

const ResumeTraining = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ResumeTraining" id="training">
      <div className="ResumeTraining-title">
        <img
          className="ResumeTraining-title-icon"
          src={trainingIcon}
          alt="training icon"
        />
        <h3 className="ResumeTraining-title-text">
          {language === 'en' ? 'Training' : 'Formation'}
        </h3>
      </div>
      <div className="ResumeTraining-item">
        <p className="ResumeTraining-item-diploma">
          {language === 'en'
            ? 'Professional qualification - Application Designer & Developer (Bac +4)'
            : "Titre professionnel - Concepteur Développeur d'Applications (Bac +4)"}
        </p>
        <div className="ResumeTraining-item-whereWhen">
          <p className="ResumeTraining-item-whereWhen-where">
            {language === 'en' ? 'Wild Code School' : 'Wild Code School'}
          </p>
          <p className="ResumeTraining-item-whereWhen-when">
            {language === 'en' ? 'Mar. 25 - May 26' : 'Mar. 25 - mai 26'}
          </p>
        </div>
        <ul className="ResumeTraining-item-description">
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- Software architecture & application design'
              : "- Architecture logicielle & conception d'applications"}
          </li>
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- CI/CD pipelines, automated testing'
              : '- CI/CD, tests automatisés'}
          </li>
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- Containerization (Docker) and deployment workflows'
              : '- Containerisation (Docker) et workflows de déploiement'}
          </li>
        </ul>
      </div>
      <div className="ResumeTraining-item">
        <p className="ResumeTraining-item-diploma">
          {language === 'en'
            ? 'Professional qualification - Web and Mobile Web Developer (Bac +2)'
            : 'Titre professionnel - Développeur Web et Web Mobile (Bac +2)'}
        </p>
        <div className="ResumeTraining-item-whereWhen">
          <p className="ResumeTraining-item-whereWhen-where">
            {language === 'en' ? "O'clock School" : "École O'clock"}
          </p>
          <p className="ResumeTraining-item-whereWhen-when">
            {language === 'en' ? 'Nov. 23 - July. 24' : 'nov. 23 - juil. 24'}
          </p>
        </div>
        <ul className="ResumeTraining-item-description">
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- Front-end : HTML, CSS, JavaScript React specialisation'
              : '- Front-end : HTML, CSS, JavaScript spécialisation React'}
          </li>
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- Back-end : OOP, MVC pattern with PHP/Laravel'
              : '- Back-end : POO, modèle MVC avec PHP/Laravel'}
          </li>
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? '- “DATA” specialisation : SQL, NoSQL, API data and NodeJS'
              : '- Spécialisation “DATA” : SQL, NoSQL, API data et NodeJS'}
          </li>
        </ul>
      </div>
      <div className="ResumeTraining-item">
        <p className="ResumeTraining-item-diploma">
          {language === 'en'
            ? 'PhD in Human Movement Sciences (Bac +8)'
            : 'Doctorat en Sciences du Mouvement Humain (Bac +8)'}
        </p>
        <div className="ResumeTraining-item-whereWhen">
          <p className="ResumeTraining-item-whereWhen-where">
            {language === 'en'
              ? 'Aix-Marseille University'
              : 'Aix-Marseille Université'}
          </p>
          <p className="ResumeTraining-item-whereWhen-when">
            {language === 'en' ? 'May 11 - Jan. 15' : 'mai 11 - jan. 15'}
          </p>
        </div>
        <ul className="ResumeTraining-item-description">
          <li className="ResumeTraining-item-description-li">
            {language === 'en'
              ? 'Influence of footwear on the biomechanical pattern of running: short-term adaptations to the geometric characteristics of the sole.'
              : 'Influence de la chaussure sur le schéma biomécanique de course à pied : adaptations à court terme aux caractéristiques géométriques de la semelle.'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeTraining;
