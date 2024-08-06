import { RiTeamFill } from 'react-icons/ri';
import autonomous from '../../../../../assets/autonomous-icon.svg';
import { RiSearchEyeLine } from 'react-icons/ri';
import { GoChecklist } from 'react-icons/go';
import { GiChameleonGlyph } from 'react-icons/gi';

import peopleSkillsIcon from '../../../../../assets/people-skills-icon.svg';

import './ResumePeopleSkills.scss';

const ResumePeopleSkills = () => {
  return (
    <div className="ResumePeopleSkills" id="peopleSkills">
      <div className="ResumePeopleSkills-title">
        <img
          className="ResumePeopleSkills-title-icon"
          src={peopleSkillsIcon}
          alt="skills icon"
        />
        <h3 className="ResumePeopleSkills-title-text">People skills</h3>
      </div>
      <ul className="ResumePeopleSkills-items">
        <li className="ResumePeopleSkills-items-item">
          <RiTeamFill className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">Team player</p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <img
            className="ResumePeopleSkills-items-item-icon"
            src={autonomous}
            alt="autonomous icon"
          />
          <p className="ResumePeopleSkills-items-item-text">Autonomous</p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <RiSearchEyeLine className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">Curiosity</p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <GoChecklist className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">Thoroughness</p>
        </li>
        <li className="ResumePeopleSkills-items-item">
          <GiChameleonGlyph className="ResumePeopleSkills-items-item-icon" />
          <p className="ResumePeopleSkills-items-item-text">Ability to adapt</p>
        </li>
      </ul>
    </div>
  );
};

export default ResumePeopleSkills;
