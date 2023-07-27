import Link from 'next/link';
import React from 'react';

type Props = {
  navbar: boolean;
};
const Logo = ({ navbar }: Props) => {
  return (
    <div>
      <Link href="/">
        <h1
          className={`${
            navbar &&
            'text-pry scale-75 transition-all delay-150 duration-500 ease-in-out'
          } text-3xl font-semibold tracking-wider`}
        >
          Pursuit{' '}
          <span
            className={`${
              navbar &&
              'text-slate-800 transition-all delay-150 duration-300 ease-in-out'
            } text-pry`}
          >
            Hub
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
