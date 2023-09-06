import React, { useState, useEffect } from 'react';

import Pagination from 'react-bootstrap/Pagination';

export default function GetPagination({ page, totalPages, handlePageChange }) {
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 425) {
      setMaxVisiblePages(1);
    } else if (window.innerWidth < 576) {
      setMaxVisiblePages(3);
    } else if (window.innerWidth < 992) {
      setMaxVisiblePages(5);
    } else {
      setMaxVisiblePages(7);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const getPageRange = () => {
    if (totalPages <= maxVisiblePages) {
      return [...Array(totalPages)].map((_, index) => index + 1);
    }

    const middlePage = Math.floor(maxVisiblePages / 2);
    let lowerBound = Math.max(page - middlePage, 1);
    let upperBound = Math.min(page + middlePage, totalPages);

    if (page <= middlePage) {
      upperBound = maxVisiblePages;
    } else if (page > totalPages - middlePage) {
      lowerBound = totalPages - maxVisiblePages + 1;
    }

    const pageRange = [];
    if (lowerBound !== 1) {
      pageRange.push(1);
      if (lowerBound !== 2) {
        pageRange.push('...');
      }
    }

    for (let i = lowerBound; i <= upperBound; i++) {
      pageRange.push(i);
    }

    if (upperBound !== totalPages) {
      if (upperBound !== totalPages - 1) {
        pageRange.push('...');
      }
      pageRange.push(totalPages);
    }

    return pageRange;
  };

  const pageRange = getPageRange();

  return (
    <>
      {totalPages > 1 && (
        <Pagination className="mx-auto mb-3">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={isFirstPage}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            disabled={isFirstPage}
          />
          {pageRange.map((pageNumber, index) => {
            if (pageNumber === '...') {
              return <Pagination.Ellipsis key={index} />;
            }
            return (
              <Pagination.Item
                key={index}
                active={pageNumber === page}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
            disabled={isLastPage}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={isLastPage}
          />
        </Pagination>
      )}
    </>
  );
}
