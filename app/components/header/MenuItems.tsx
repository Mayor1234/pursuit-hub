'use client';
import Link from 'next/link';
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Menu from './Menu';

const MenuItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ul className="hidden h-16 md:flex justify-center items-center gap-10">
        <Menu />
      </ul>
      <div className="h-full flex items-center justify-center flex-col  md:hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer z-50 text-[#839396]"
        >
          {isOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>
        {isOpen && (
          <div className="h-screen w-screen bg-[#d6dbdc] absolute top-16 right-0 left-0 z-40 gap-8 uppercase text-sm text-gray-800 font-medium shadow-md">
            <ul
              className="flex flex-col h-[80%] gap-10 py-20 px-5 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
