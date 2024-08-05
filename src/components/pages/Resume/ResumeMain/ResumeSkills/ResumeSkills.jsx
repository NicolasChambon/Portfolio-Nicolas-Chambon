import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

import { FaNodeJs } from 'react-icons/fa6';
import { SiPhp } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

import { FaGitAlt } from 'react-icons/fa6';
import { DiScrum } from 'react-icons/di';
import Matlab from '../../../../../assets/matlab-icon.svg';
import { IoLogoFigma } from 'react-icons/io5';

import skillsIcon from '../../../../../assets/skills-icon.svg';

import './ResumeSkills.scss';

const ResumeSkills = () => {
  return (
    <div className="ResumeSkills" id="skills">
      <div className="ResumeSkills-title">
        <img
          className="ResumeSkills-title-icon"
          src={skillsIcon}
          alt="skills icon"
        />
        <h3 className="ResumeSkills-title-text">Skills</h3>
      </div>

      <div className="ResumeSkills-items">
        <div className="ResumeSkills-items-item">
          <p className="ResumeSkills-items-item-category">Front-end</p>
          <div className="ResumeSkills-items-item-category-element">
            <SiSass className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">
              Sass
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <SiJavascript className="ResumeSkills-items-item-category-element-icon javascript" />
            <p className="ResumeSkills-items-item-category-element-text">
              JavaScript
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <FaReact className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">
              React
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <SiRedux className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">
              Redux
            </p>
          </div>
        </div>

        <div className="ResumeSkills-items-item">
          <p className="ResumeSkills-items-item-category">Back-end</p>
          <div className="ResumeSkills-items-item-category-element">
            <FaNodeJs className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">
              Node.js
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <p className="ResumeSkills-items-item-category-element-icon express">
              ExpressJS
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <SiPhp className="ResumeSkills-items-item-category-element-icon php" />
            <p className="ResumeSkills-items-item-category-element-text">PHP</p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <BiLogoPostgresql className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">
              PostgreSQL
            </p>
          </div>
        </div>

        <div className="ResumeSkills-items-item">
          <p className="ResumeSkills-items-item-category">Other</p>
          <div className="ResumeSkills-items-item-category-element">
            <FaGitAlt className="ResumeSkills-items-item-category-element-icon" />
            <p className="ResumeSkills-items-item-category-element-text">Git</p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <DiScrum className="ResumeSkills-items-item-category-element-icon scrum" />
            <p className="ResumeSkills-items-item-category-element-text">
              Scrum
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <IoLogoFigma className="ResumeSkills-items-item-category-element-icon figma" />
            <p className="ResumeSkills-items-item-category-element-text">
              Figma
            </p>
          </div>

          <div className="ResumeSkills-items-item-category-element">
            <img
              className="ResumeSkills-items-item-category-element-icon"
              src={Matlab}
              alt="matlab icon"
            />
            <p className="ResumeSkills-items-item-category-element-text">
              Matlab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
