import { NavLink } from 'react-router-dom';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  return (
    <nav className="HeaderMenu">
      <ul className="HeaderMenu-list">
        <li className="HeaderMenu-list-item">
          <NavLink
            className="HeaderMenu-list-item-link"
            to="/resume"
            onClick={() => {
              if (window.location.pathname === '/resume') {
                window.scrollTo(0, 0);
              }
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
              if (window.location.pathname === '/projects') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
