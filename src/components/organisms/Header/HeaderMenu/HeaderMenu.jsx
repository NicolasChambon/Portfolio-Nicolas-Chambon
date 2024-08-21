import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { toogleLanguage } from '../../../../actions/globalActions';

import frIcon from '../../../../assets/icons/france-icon.svg';
import enIcon from '../../../../assets/icons/uk-icon.svg';

import './HeaderMenu.scss';

const HeaderMenu = () => {
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

  const dispatch = useDispatch();
  const language = useSelector((state) => state.global.language);

  return (
    <nav className="HeaderMenu">
      <ul className="HeaderMenu-list">
        <li className="HeaderMenu-list-item">
          <NavLink
            className="HeaderMenu-list-item-link"
            to="/resume"
            onClick={() => {
              scrollIfOnSamePage('/resume');
            }}
          >
            {language === 'en' ? 'Resume' : 'CV'}
          </NavLink>
        </li>
        <li className="HeaderMenu-list-item">
          <NavLink
            className="HeaderMenu-list-item-link"
            to="/projects"
            onClick={() => {
              scrollIfOnSamePage('/projects');
            }}
          >
            {language === 'en' ? 'Projects' : 'Projets'}
          </NavLink>
        </li>
        <li className="HeaderMenu-list-item">
          <NavLink
            className="HeaderMenu-list-item-link"
            to="/contact"
            onClick={() => {
              scrollIfOnSamePage('/contact');
            }}
          >
            Contact
          </NavLink>
        </li>
        <li className="HeaderMenu-list-item">
          <button
            className="HeaderMenu-list-item-btn"
            type="button"
            onClick={() => {
              dispatch(toogleLanguage(language === 'en' ? 'fr' : 'en'));
            }}
          >
            <img
              className="HeaderMenu-list-item-btn-icon"
              src={language === 'en' ? frIcon : enIcon}
              alt="France Icon"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
