import { dots } from '../pagination/Pagination';

const getPages = (length: number, inc: number = 1): number[] => {
  // return  Array.from({length}, (_, i)=>i+inc)

  // or
  return [...Array(length).keys()].map((num) => num + inc);
};

export default function usePagination(
  totalPosts: number,
  currentPage: any,
  postPerPage: number
) {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  if (totalPages <= 5) {
    return getPages(totalPages); // -> 1 2 3 4 5
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, dots, totalPages]; // -> 1 2 3 4 ... 10
  }

  if (currentPage < totalPages - 2) {
    return [
      1,
      dots,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dots,
      totalPages,
    ];
    // -> 1 ... 4 5 6 ... 10
  }

  return [1, dots, ...getPages(4, totalPages - 3)]; // -> 1 ... 7 8 9 10
}
