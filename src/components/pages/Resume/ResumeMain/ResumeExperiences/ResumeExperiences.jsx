import { useSelector } from 'react-redux';

import experiencesIcon from '../../../../../assets/icons/experiences-icon.svg';

import './ResumeExperiences.scss';

const ResumeExperiences = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ResumeExperiences" id="experiences">
      <div className="ResumeExperiences-title">
        <img
          className="ResumeExperiences-title-icon"
          src={experiencesIcon}
          alt="Experiences icon"
        />
        <h3 className="ResumeExperiences-title-text">
          {language === 'en' ? 'Experiences' : 'Expériences'}
        </h3>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">
          {language === 'en'
            ? 'Leader in mountain hiking footwear design'
            : 'Leader en conception de chaussures de randonnée en montagne'}
        </p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Quechua (Sallanches, France)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            {language === 'en' ? 'Sept. 22 - Sept. 23' : 'sept. 22 - sept. 23'}
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Management of a team of product engineers'
              : '- Management d’une équipe d’ingénieurs produit'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Writing and leading the target design and innovation strategy'
              : '- Rédaction et pilotage de la stratégie de conception et d’innovation cible'}
          </li>
        </ul>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">
          {language === 'en'
            ? 'Footwear product engineer'
            : 'Ingénieur produit chaussures'}
        </p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Volley-Ball (Milan, Italie)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            {language === 'en' ? 'Oct. 19 - Sept. 22' : 'oct. 19 - sept. 22'}
          </p>
        </div>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Kalenji (Lille, France)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            {language === 'en' ? 'Jan. 18 - Sept. 19' : 'jan. 18 - sept. 19'}
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Project manager: central link with production, design, offering and marketing'
              : '- Chef de projet : lien central avec la production, le design, l’offre et le marketing'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Responsible for the fourfold aspects of cost-quality-timelines-environmental impact'
              : '- Responsable du quadriptyque coût-qualité-délais-impact environnemental'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Design, development, and industrialization (in Asia) of sports shoes'
              : '- Conception, développement, et industrialisation (en Asie) de chaussures de sport'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Continuous improvement of commercialized products'
              : '- Amélioration continue des produits commercialisés'}
          </li>
        </ul>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">
          {language === 'en' ? 'R&D engineer' : 'Ingénieur R&D'}
        </p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            {language === 'en'
              ? 'Decathlon - Biomechanics laboratory (Lille, France)'
              : 'Decathlon - Laboratoire de biomécanique (Lille, France)'}
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            {language === 'en' ? 'Sept. 10 - Dec. 17' : 'sept. 10 - dec. 17'}
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Study of the mechanical properties of footwear and their effects on health and performance.'
              : '- Étude des propriétés mécaniques des chaussures et de leurs effets sur la santé et la performance.'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Evaluation of innovative technical concepts.'
              : '- Évaluation de concepts techniques innovants.'}
          </li>
          <li className="ResumeExperiences-item-description-li">
            {language === 'en'
              ? '- Analysis of human movement, instrumentation, signal processing, statistical processing, Matlab programming.'
              : '- Analyse du mouvement humain, instrumentation, traitement du signal, traitement statistique, programmation Matlab.'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeExperiences;
