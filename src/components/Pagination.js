import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  const countPages = Math.ceil(totalPosts/postsPerPage);
  for (let i = 1; i < countPages; ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {
          pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a href='!#' onClick={() => paginate(number) } className='page-link'>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Pagination;
