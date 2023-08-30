import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/ph_logo.png';

const Logo = () => {
  return (
    <div className="uppercase">
      <Link href="/">
        <div className="flex justify-center items-center w-full">
          <div className="relative w-[40px] h-[35px] lg:w-[60px] lg:h-[50px] ">
            <Image
              src={logo}
              alt="LOGO"
              className="object-fill object-center aspect-square"
              fill
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1
              className="
            text-gray-800 text-xl lg:text-3xl font-semibold tracking-wider leading-tight"
            >
              Pursuit
            </h1>
            <span className="text-sm lg:text-lg text-center font-medium tracking-[0.5em] font-serif text-gray-700 -mt-2">
              Hubs
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
