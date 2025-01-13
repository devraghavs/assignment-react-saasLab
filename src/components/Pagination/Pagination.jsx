import React, { useRef } from "react";
import "./Pagination.css";

const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginationRef = useRef(null);

  const scrollPagination = (direction) => {
    if (paginationRef.current) {
      const scrollAmount = 50; // Amount to scroll horizontally
      paginationRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const prevPage = () => {
    scrollPagination("prev");
    onPageChange(currentPage - 1);
  };
  const nextPage = () => {
    scrollPagination("next");
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-wrapper">
      <button
        className="prev-button"
        onClick={() => prevPage()}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div ref={paginationRef} className="pagination-container">
        <div className="pagination">
          {pages.map((page) => (
            <button
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <button
        className="next-button"
        onClick={() => nextPage()}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
