import italy from '../../../../../assets/icons/italy-icon.svg';
import france from '../../../../../assets/icons/france-icon.svg';
import uk from '../../../../../assets/icons/uk-icon.svg';

import languagesIcon from '../../../../../assets/icons/languages-icon.svg';

import './ResumeLanguages.scss';

const ResumeLanguages = () => {
  return (
    <div className="ResumeLanguages" id="languages">
      <div className="ResumeLanguages-title">
        <img
          className="ResumeLanguages-title-icon"
          src={languagesIcon}
          alt="skills icon"
        />
        <h3 className="ResumeLanguages-title-text">Languages</h3>
      </div>
      <ul className="ResumeLanguages-items">
        <li className="ResumeLanguages-items-item">
          <img
            className="ResumeLanguages-items-item-icon"
            src={france}
            alt="autonomous icon"
          />
          <p className="ResumeLanguages-items-item-text">C2 (native)</p>
        </li>
        <li className="ResumeLanguages-items-item">
          <img
            className="ResumeLanguages-items-item-icon"
            src={uk}
            alt="autonomous icon"
          />
          <p className="ResumeLanguages-items-item-text">B2</p>
        </li>
        <li className="ResumeLanguages-items-item">
          <img
            className="ResumeLanguages-items-item-icon"
            src={italy}
            alt="autonomous icon"
          />
          <p className="ResumeLanguages-items-item-text">C1</p>
        </li>
      </ul>
    </div>
  );
};

export default ResumeLanguages;
