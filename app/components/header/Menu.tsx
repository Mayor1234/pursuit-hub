import Link from 'next/link';
import { menuItems } from '../constants';

const Menu = () => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <Link key={index} href={`${menu.url}`}>
          <li className="uppercase text-base hover:text-pry transition-all delay-150 duration-300 ease-in-out  ">
            {menu.title}
          </li>
        </Link>
      ))}
    </>
  );
};

export default Menu;
