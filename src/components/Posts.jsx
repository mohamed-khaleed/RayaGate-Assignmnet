import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
 

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 ">
      <main className="p-12">
        <h2 className="text-dark-green mb-16 text-center text-5xl font-semibold">
          find the <span className="text-medium-green">posts list</span>
        </h2>
        <div>
          {loading && <p>Loading posts...</p>}
          {error && <p>Something went wrong: {error.message}</p>}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="flex h-80 flex-col justify-between rounded bg-white p-5 shadow-md"
              >
                <div className="bg-dark-green flex h-[3rem] w-[3rem] items-center justify-center rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                    <path d="M13.5 6.5l4 4" />
                  </svg>
                </div>
                <h3 className="text-dark-green text-xl font-semibold capitalize">
                  {post.title}
                </h3>
                <p className="text-light-grey">{post.body}</p>
                {/* <button className="bg-dark-green w-[150px] hover:bg-light-green text-white font-bold py-2 px-5 capitalize rounded">see more</button> */}
                <a
                  href="#"
                  className="text-dark-green underline underline-offset-4 flex gap-1 w-[150px] hover:text-medium-green font-bold py-2  capitalize rounded"
                >
                  see more 
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l14 0" />
                      <path d="M13 18l6 -6" />
                      <path d="M13 6l6 6" />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </main>
    </section>
  );
}

export default Posts;
