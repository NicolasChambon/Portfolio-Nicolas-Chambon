import { useEffect } from 'react';

import { FaHouse } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaStrava } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import maltIcon from '../../../assets/icons/malt-icon.svg';

import './Contact.scss';

const Contact = () => {
  useEffect(() => {
    const page = document.querySelector('.App-background');
    page.scrollTo(0, 0, 'instant');
  }, []);
  return (
    <main className="Contact">
      <div className="Contact-wrapper">
        <h2 className="Contact-wrapper-title">Contact</h2>
        <ul className="Contact-wrapper-items">
          <li className="Contact-wrapper-items-item">
            <FaHouse className="Contact-wrapper-items-item-icon" />
            <p className="Contact-wrapper-items-item-text">
              95 clos de la haute corniche <br /> 74700, Sallanches, France
            </p>
          </li>
          <li className="Contact-wrapper-items-item">
            <FaPhone className="Contact-wrapper-items-item-icon" />
            <p className="Contact-wrapper-items-item-text">+33 6 62 66 92 39</p>
          </li>
          <li className="Contact-wrapper-items-item">
            <a
              className="Contact-wrapper-items-item-link"
              href="mailto:nico.chambon@gmail.com"
              target="_blank"
            >
              <MdEmail className="Contact-wrapper-items-item-link-icon" />
              <p className="Contact-wrapper-items-item-link-text">
                nicolas.chambon.dev@gmail.com
              </p>
              <FiExternalLink className="Contact-wrapper-items-item-link-iconLink" />
            </a>
          </li>
          <li className="Contact-wrapper-items-item">
            <a
              className="Contact-wrapper-items-item-link"
              href="https://www.linkedin.com/in/nicolas-chambon-dev/"
              target="_blank"
            >
              <FaLinkedin className="Contact-wrapper-items-item-link-icon" />
              <p className="Contact-wrapper-items-item-link-text">
                linkedin.com/in/nicolas-chambon-dev
              </p>
              <FiExternalLink className="Contact-wrapper-items-item-link-iconLink" />
            </a>
          </li>
          <li className="Contact-wrapper-items-item">
            <a
              className="Contact-wrapper-items-item-link"
              href="https://www.github.com/NicolasChambon"
              target="_blank"
            >
              <FaGithub className="Contact-wrapper-items-item-link-icon" />
              <p className="Contact-wrapper-items-item-link-text">
                github.com/NicolasChambon
              </p>
              <FiExternalLink className="Contact-wrapper-items-item-link-iconLink" />
            </a>
          </li>
          <li className="Contact-wrapper-items-item">
            <a
              className="Contact-wrapper-items-item-link"
              href="https://www.malt.fr/profile/nicolaschambon1"
              target="_blank"
            >
              <img
                src={maltIcon}
                alt="Malt"
                className="Contact-wrapper-items-item-link-icon"
              />
              <p className="Contact-wrapper-items-item-link-text">
                malt.fr/profile/nicolaschambon1
              </p>
              <FiExternalLink className="Contact-wrapper-items-item-link-iconLink" />
            </a>
          </li>
          <li className="Contact-wrapper-items-item">
            <a
              className="Contact-wrapper-items-item-link"
              href="https://www.strava.com/athletes/nchambon"
              target="_blank"
            >
              <FaStrava className="Contact-wrapper-items-item-link-icon" />
              <p className="Contact-wrapper-items-item-link-text">
                strava.com/athletes/nchambon
              </p>
              <FiExternalLink className="Contact-wrapper-items-item-link-iconLink" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
