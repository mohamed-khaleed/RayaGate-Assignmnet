import React from 'react';
import { render,  screen  } from "@testing-library/react";
import { test, describe ,expect } from "@jest/globals";
import Posts from '../components/Posts';
import { SearchContext } from '../context/SearchContext';
import { PaginationContext } from '../context/PaginationContext';

describe('Posts component', () => {
  test('renders loading message initially', async () => {
    
    const searchContextValue = { searchQuery: '' };
    const paginationContextValue = { indexOfFirstPost: 0, indexOfLastPost: 10 };


    render(
      <SearchContext.Provider value={searchContextValue}>
        <PaginationContext.Provider value={paginationContextValue}>
          <Posts />
        </PaginationContext.Provider>
      </SearchContext.Provider>
    );

  
    expect(screen.getByText(/Loading posts.../i)).toBeInTheDocument();
  });
  test('renders error message if fetch fails', async () => {
  
    const searchContextValue = { searchQuery: '' };
    const paginationContextValue = { indexOfFirstPost: 0, indexOfLastPost: 10 };
  
    
    render(
      <SearchContext.Provider value={searchContextValue}>
        <PaginationContext.Provider value={paginationContextValue}>
          <Posts />
        </PaginationContext.Provider>
      </SearchContext.Provider>
    );
  

    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();
  });
  test('renders no posts message if no posts are available', async () => {
 
    const searchContextValue = { searchQuery: '' };
    const paginationContextValue = { indexOfFirstPost: 0, indexOfLastPost: 10 };
  
   
    render(
      <SearchContext.Provider value={searchContextValue}>
        <PaginationContext.Provider value={paginationContextValue}>
          <Posts />
        </PaginationContext.Provider>
      </SearchContext.Provider>
    );
  
    // Assert that no posts message is rendered
    expect(await screen.findByText(/No posts available/i)).toBeInTheDocument();
  });
    
});