import { menuItems } from '../constants';
import ClientRoute from '../ClientRoute';

const Menu = () => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <ClientRoute route={`/${menu.url}`} key={index}>
          <li className="h-full items-center uppercase text-base hover:text-pry transition-all delay-150 duration-300 ease-in-out">
            {menu.title}
          </li>
        </ClientRoute>
      ))}
    </>
  );
};

export default Menu;
