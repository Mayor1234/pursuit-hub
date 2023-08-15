import usePagination from '../hooks/usePagination';

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
export type PaginationProps = {
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  postsPerPage: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
};

export const dots = '...';

const Pagination = ({
  totalPosts,
  paginate,
  postsPerPage,
  currentPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  const pages = usePagination(totalPosts, paginate, postsPerPage);

  return (
    <div>
      <ul className="flex gap-4 items-center justify-center my-8 ">
        <li onClick={() => prevPage()}>
          <KeyboardArrowLeftOutlinedIcon className="text-pry  hover:text-sec transition-all delay-75 duration-300 ease-in-out cursor-pointer" />
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`${currentPage === page && 'bg-pry text-white'}
            } cursor-pointer bg-[#f7f8f9] text-pry transition-all delay-100 duration-300 ease-in-out py-2 px-4 rounded-sm hover:bg-sec hover:text-[#134853]`}
            onClick={() => paginate(page)}
          >
            {page}
          </li>
        ))}
        <li onClick={() => nextPage()} className="font-light">
          <KeyboardArrowRightOutlinedIcon className="text-pry  hover:text-sec transition-all delay-100 duration-300 ease-in-out cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
