import Link from 'next/link';

import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

function StudioNavbar(props: any) {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <div className=" flex items-center text-[#fff] p-5 hover:text-[#1890ff] ">
          <KeyboardReturnOutlinedIcon />
          Back To Website
        </div>
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
