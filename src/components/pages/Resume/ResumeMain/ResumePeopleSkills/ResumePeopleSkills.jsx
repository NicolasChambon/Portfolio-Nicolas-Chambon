import { useSelector } from 'react-redux';

import { RiTeamFill } from 'react-icons/ri';
import autonomous from '../../../../../assets/icons/autonomous-icon.svg';
import { RiSearchEyeLine } from 'react-icons/ri';
import { GoChecklist } from 'react-icons/go';
import { GiChameleonGlyph } from 'react-icons/gi';

import peopleSkillsIcon from '../../../../../assets/icons/people-skills-icon.svg';

import './ResumePeopleSkills.scss';

const ResumePeopleSkills = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ResumePeopleSkills" id="peopleSkills">
      <div className="ResumePeopleSkills-title">
        <img
          className="ResumePeopleSkills-title-icon"
          src={peopleSkillsIcon}
          alt="skills icon"
        />
        <h3 className="ResumePeopleSkills-title-text">
          {language === 'en' ? 'People skills' : 'Savoir-être'}
        </h3>
      </div>
      <ul className="ResumePeopleSkills-items">
        <li className="ResumePeopleSkills-items-item">
          <RiTeamFill className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">
            {language === 'en' ? 'Team player' : 'Esprit d’équipe'}
          </p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <img
            className="ResumePeopleSkills-items-item-icon"
            src={autonomous}
            alt="autonomous icon"
          />
          <p className="ResumePeopleSkills-items-item-text">
            {language === 'en' ? 'Autonomous' : 'Autonome'}
          </p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <RiSearchEyeLine className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">
            {language === 'en' ? 'Curious' : 'Curieux'}
          </p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <GoChecklist className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">
            {language === 'en' ? 'Thoroughness' : 'Rigoureux'}
          </p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <GiChameleonGlyph className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">
            {language === 'en' ? 'Ability to adapt' : 'Capacité d’adaptation'}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResumePeopleSkills;
