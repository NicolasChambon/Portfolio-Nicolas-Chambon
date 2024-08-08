import { Link } from 'react-router-dom';

import NcLogo from '../../../../assets/logos/logo-portfolio-nc-darkBlue.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      const page = document.querySelector('.App-background');
      page.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
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
