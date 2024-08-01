import { Link } from 'react-router-dom';

import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="/resume"
            onClick={() => {
              if (window.location.pathname === '/resume') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Resume
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="/projects"
            onClick={() => {
              if (window.location.pathname === '/projects') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
