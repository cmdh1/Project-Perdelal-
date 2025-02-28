import React from 'react'
import ReactPaginate from 'react-paginate';


import styles from './Paginate.module.scss';

const Pagination = ({onChangePage}) => {
    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % items.length;
    //     console.log(
    //       `User requested page number ${event.selected}, which is offset ${newOffset}`
    //     );
    //     setItemOffset(newOffset);
    //   };
    
  return (
    
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=" >"
     previousLabel="< "
    onPageChange={(event) => onChangePage(event.selected+1)}
    pageRangeDisplayed={4}
    pageCount={3}
   
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination