import { IoMenu } from 'react-icons/io5';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
// import HeaderMenu from './HeaderMenu/HeaderMenu';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />
        <HeaderNav />
        <button className="Header-wrapper-menuBtn">
          <IoMenu className="Header-wrapper-menuBtn-icon" />
        </button>
        {/* <HeaderMenu className="HeaderMenu" /> */}
      </div>
    </header>
  );
};

export default Header;
