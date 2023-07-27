import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <div className=" flex items-center text-[#fff] p-5 hover:text-[#1890ff] ">
          <ArrowLeftIcon className="h-4 mr-2 text-[#fff]" />
          Back To Website
        </div>
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
