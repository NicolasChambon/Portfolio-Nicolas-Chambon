import { NavLink } from 'react-router-dom';

import frIcon from '../../../../assets/icons/france-icon.svg';
import enIcon from '../../../../assets/icons/uk-icon.svg';

import './HeaderNav.scss';

const HeaderNav = () => {
  const scrollIfOnSamePage = (path) => {
    if (window.location.pathname === path) {
      const page = document.querySelector('.App-background');
      page.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
            to="/resume"
            onClick={() => {
              scrollIfOnSamePage('/resume');
            }}
          >
            Resume
          </NavLink>
        </li>
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
            to="/projects"
            onClick={() => {
              scrollIfOnSamePage('/projects');
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
            to="/contact"
            onClick={() => {
              scrollIfOnSamePage('/contact');
            }}
          >
            Contact
          </NavLink>
        </li>
        {/* <li className="HeaderNav-list-item">
          <button className="HeaderNav-list-item-btn" type="button">
            <img
              className="HeaderNav-list-item-btn-icon"
              src={frIcon}
              alt="France Icon"
            />
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default HeaderNav;
