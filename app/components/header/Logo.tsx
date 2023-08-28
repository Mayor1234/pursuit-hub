import Link from 'next/link';

const Logo = () => {
  return (
    <div className="uppercase">
      <Link href="/">
        <div className="flex flex-col justify-center items-center w-full">
          <h1
            className="
            text-gray-800 ease-i text-2xl md:text-3xl font-semibold tracking-wider leading-tight transition-all duration-300 ease-in-out hover:text-pry"
          >
            Pursuit
          </h1>
          <span className="md:text-lg text-center font-medium tracking-[0.5em] font-serif text-gray-700 -mt-2">
            Hubs
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
