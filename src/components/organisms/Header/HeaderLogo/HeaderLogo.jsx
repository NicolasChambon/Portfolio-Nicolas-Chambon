import { Link } from 'react-router-dom';

import NcLogo from '../../../../assets/logos/logo-portfolio-nc-darkBlue.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      const main = document.querySelector('main');
      main.scrollIntoView();
    }
  };

  return (
    <Link className="HeaderLogo" to="/" onClick={handleLogoClick}>
      <img className="HeaderLogo-svg" src={NcLogo} alt="Nc Logo" />
      <p className="HeaderLogo-title">
        Nicolas <br />
        Chambon
      </p>
    </Link>
  );
};

export default HeaderLogo;
