import { useSelector } from 'react-redux';

import interestsIcon from '../../../../../assets/icons/interests-icon.svg';

import './ResumeInterests.scss';

const ResumeInterests = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ResumeInterests" id="interests">
      <div className="ResumeInterests-title">
        <img
          className="ResumeInterests-title-icon"
          src={interestsIcon}
          alt="training icon"
        />
        <h3 className="ResumeInterests-title-text">
          {language === 'en' ? 'Interests' : 'Centres d’intérêt'}
        </h3>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          {language === 'en'
            ? 'Ultra-trails and mountain'
            : 'Ultra-trails et montagne'}
        </p>

        <ul className="ResumeInterests-item-description">
          <li className="ResumeInterests-item-description-li">
            {language === 'en'
              ? '2021 - Finisher of Tor des Géants (350 km / 26,000 m ascent)'
              : '2021 - Finisher du Tor des Géants (350 km / 26 000 m de dénivelé)'}
          </li>
          <li className="ResumeInterests-item-description-li">
            {language === 'en'
              ? '2015 - Finisher of Diagonale des fous (165 km / 10,000 m ascent)'
              : '2015 - Finisher de la Diagonale des fous (165 km / 10 000 m de dénivelé)'}
          </li>
          <li className="ResumeInterests-item-description-li">
            {language === 'en'
              ? '2003 - Ascent of Mont-Blanc'
              : '2003 - Ascension du Mont-Blanc'}
          </li>
        </ul>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          {language === 'en' ? 'Bike trips' : 'Voyages à vélo'}
        </p>

        <ul className="ResumeInterests-item-description">
          <li className="ResumeInterests-item-description-li">
            {language === 'en'
              ? '2020 - Milan - Naples in 7 days (1 120 km / 4,700 m ascent)'
              : '2020 - Milan - Naples en 7 jours (1 120 km / 4 700 m de dénivelé)'}
          </li>
          <li className="ResumeInterests-item-description-li">
            {language === 'en'
              ? '2017 - Strasbourg - Sant’Agata (Italy) in 9 days (1 200 km / 17,500 m ascent)'
              : '2017 - Strasbourg - Sant’Agata (Italie) en 9 jours (1 200 km / 17 500 m de dénivelé)'}
          </li>
        </ul>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          {language === 'en' ? 'Black belt in judo' : 'Ceinture noire de judo'}
        </p>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          {language === 'en'
            ? 'Drawing up running training plans'
            : 'Élaboration de plans d’entraînement course à pied'}
        </p>
      </div>
    </div>
  );
};

export default ResumeInterests;
