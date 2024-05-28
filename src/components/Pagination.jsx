import React from 'react';
import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

function Pagination({totalPosts}) {
  const {currentPage,postsPerPage,paginate} = useContext(PaginationContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="mt-20">
    <ul className="flex flex-wrap justify-center space-x-2">
      <li className="page-item">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="page-link px-4 py-2 block bg-gray-200 text-dark-bg-dark-green rounded-md"
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      {pageNumbers.map(number => (
        <li key={number} className={`page-item hidden sm:inline-block ${number === currentPage ? 'bg-dark-green text-white' : 'bg-gray-200'} rounded-md`}>
          <a
            onClick={() => paginate(number)}
            href="#!"
            className={`page-link px-4 py-2 block ${number === currentPage ? 'text-white' : 'text-dark-bg-dark-green'}`}
          >
            {number}
          </a>
        </li>
      ))}
      <li className="page-item">
        <button
          onClick={() => paginate(currentPage + 1)}
          className="page-link px-4 py-2 block bg-gray-200 text-dark-bg-dark-green rounded-md"
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
  
  );
}

export default Pagination
