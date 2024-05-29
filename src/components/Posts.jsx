import React, { useState, useEffect, useContext } from 'react';
import Pagination from "./Pagination";
import PostItem from "./PostItem";
import Header from "./Header";
import { SearchContext } from "../context/SearchContext";
import { PaginationContext } from "../context/PaginationContext";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { searchQuery } = useContext(SearchContext);
  const { indexOfFirstPost, indexOfLastPost } = useContext(PaginationContext);
  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      try {
        
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchPosts();
    return () => {
      controller.abort();
    };
  }, []);
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <Header />
      <section className="py-16 ">
        <main className="p-12">
          <h2 className="mb-16 text-center text-5xl font-semibold text-dark-green">
            find the <span className="text-medium-green">posts list</span>
          </h2>
          <div>
            {loading && <p>Loading posts...</p>}
            {error && <p>Something went wrong: {error.message}</p>}
            {!loading && filteredPosts.length === 0 && (
              <p className="text-3xl text-dark-green">No posts available.</p>
            )}
            {!loading && filteredPosts.length > 0 && (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post) => (
                  <PostItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                  />
                ))}
              </div>
            )}
          </div>
          <Pagination totalPosts={filteredPosts.length} />
        </main>
      </section>
    </>
  );
}

export default Posts;
