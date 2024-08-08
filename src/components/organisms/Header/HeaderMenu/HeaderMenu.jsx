import { NavLink } from 'react-router-dom';

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
            Resume
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
            Projects
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
      </ul>
    </nav>
  );
};

export default HeaderMenu;
