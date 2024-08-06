import interestsIcon from '../../../../../assets/interests-icon.svg';

import './ResumeInterests.scss';

const ResumeInterests = () => {
  return (
    <div className="ResumeInterests" id="interests">
      <div className="ResumeInterests-title">
        <img
          className="ResumeInterests-title-icon"
          src={interestsIcon}
          alt="training icon"
        />
        <h3 className="ResumeInterests-title-text">Interests</h3>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          Ultra-trails and mountain :
        </p>

        <ul className="ResumeInterests-item-description">
          <li className="ResumeInterests-item-description-li">
            2021 - Finisher of Tor des Géants (350 km / 26,000 m ascent)
          </li>
          <li className="ResumeInterests-item-description-li">
            2015 - Finisher of Diagonale des fous (165 km / 10,000 m ascent)
          </li>
          <li className="ResumeInterests-item-description-li">
            2003 - Ascent of Mont-Blanc
          </li>
        </ul>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">Bike trips :</p>

        <ul className="ResumeInterests-item-description">
          <li className="ResumeInterests-item-description-li">
            2020 - Milan - Naples in 7 days (1 120 km / 4,700 m ascent)
          </li>
          <li className="ResumeInterests-item-description-li">
            2017 - Strasbourg - Sant’Agata (Italy) in 9 days (1 200 km / 17,500
            m ascent)
          </li>
        </ul>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">Black belt in judo</p>
      </div>

      <div className="ResumeInterests-item">
        <p className="ResumeInterests-item-category">
          Drawing up running training plans
        </p>
      </div>
    </div>
  );
};

export default ResumeInterests;
