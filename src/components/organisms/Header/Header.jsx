import { useState } from 'react';

import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />
        <HeaderNav />
        <button
          className="Header-wrapper-menuBtn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross2 className="Header-wrapper-menuBtn-icon" />
          ) : (
            <IoMenu className="Header-wrapper-menuBtn-icon" />
          )}
        </button>
        {isMenuOpen && <HeaderMenu />}
      </div>
    </header>
  );
};

export default Header;
