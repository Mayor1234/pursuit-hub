'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeScroll = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScroll);
  }, []);

  return (
    <header
      className={`${
        navbar && 'shadow-none'
      } bg-[#d6dbdc] h-16 w-full sticky top-0 z-40 shadow-md`}
    >
      <nav className="max-w-7xl mx-auto h-full flex justify-between items-center px-5 md:px-0">
        <Logo navbar={navbar} />
        <MenuItems />
      </nav>
    </header>
  );
};

export default Header;
