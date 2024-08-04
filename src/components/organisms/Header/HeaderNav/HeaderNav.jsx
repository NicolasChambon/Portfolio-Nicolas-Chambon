import { NavLink } from 'react-router-dom';

import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
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
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
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
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
            to="/contact"
            onClick={() => {
              if (window.location.pathname === '/contact') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
