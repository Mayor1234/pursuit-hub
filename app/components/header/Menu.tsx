import { menuItems } from '../constants';
import ClientRoute from '../ClientRoute';

const Menu = () => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <ClientRoute route={`/${menu.url}`} key={index}>
          <li className="h-full py-4 border-b-2 border-gray-200 items-center uppercase text-base hover:text-pry transition-all delay-150 duration-300 ease-in-out lg:border-none">
            {menu.title}
          </li>
        </ClientRoute>
      ))}
    </>
  );
};

export default Menu;
