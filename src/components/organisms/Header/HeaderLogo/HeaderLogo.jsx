import { Link } from 'react-router-dom';

import NcLogo from '../../../../assets/logo-portfolio-nc-darkBlue.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  return (
    <Link
      className="HeaderLogo"
      to="/"
      onClick={() => {
        if (window.location.pathname === '/') {
          window.scrollTo(0, 0);
        }
      }}
    >
      <img className="HeaderLogo-svg" src={NcLogo} alt="Nc Logo" />
      <p className="HeaderLogo-title">
        Nicolas <br />
        Chambon
      </p>
    </Link>
  );
};

export default HeaderLogo;
