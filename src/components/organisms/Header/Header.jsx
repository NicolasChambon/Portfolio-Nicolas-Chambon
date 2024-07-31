import { Link } from 'react-router-dom';

import NcLogo from '../../../assets/logo-portfolio-nc-darkBlue.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <Link
          className="Header-wrapper-logoContainer"
          to="/"
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo(0, 0);
            }
          }}
        >
          <img
            className="Header-wrapper-logoContainer-logo"
            src={NcLogo}
            alt="Nc Logo"
          />
          <p className="Header-wrapper-logoContainer-title">
            Nicolas <br />
            Chambon
          </p>
        </Link>
        <nav className="Header-wrapper-nav">
          <ul className="Header-wrapper-nav-list">
            <li className="Header-wrapper-nav-list-item">
              <Link
                className="Header-wrapper-nav-list-item-link"
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
            <li className="Header-wrapper-nav-list-item">
              <Link
                className="Header-wrapper-nav-list-item-link"
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
      </div>
    </header>
  );
};

export default Header;
