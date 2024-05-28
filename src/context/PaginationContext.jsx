import  { createContext, useState } from 'react';
import React from 'react';
export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <PaginationContext.Provider value={{ currentPage,setCurrentPage,postsPerPage,indexOfFirstPost,indexOfLastPost,paginate }}>
      {children}
    </PaginationContext.Provider>
  );
};