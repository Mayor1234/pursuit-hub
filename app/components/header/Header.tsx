import Logo from './Logo';
import MenuItems from './MenuItems';

const Header = () => {
  return (
    <header className="bg-[#d6dbdc] h-20 w-full sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto h-full w-full flex justify-between items-center px-5 lg:px-0">
        <Logo />
        <MenuItems />
      </nav>
    </header>
  );
};

export default Header;
