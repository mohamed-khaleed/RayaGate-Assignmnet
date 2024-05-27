import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customer1 from "../assets/images/customer-1.jpg";
import customer2 from "../assets/images/customer-2.jpg";
import customer3 from "../assets/images/customer-3.jpg";
import customer4 from "../assets/images/customer-4.jpg";
import customer5 from "../assets/images/customer-5.jpg";
import LoadingPage from "./LoadingPage";

function PostDetailsPage() {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        if (!postResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const postData = await postResponse.json();
        setPostDetails(postData);
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        );
        if (!commentsResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPostDetails();
  }, [id]);

  return (
    <>
      {loading && <LoadingPage />}
      {error && <p>Something went wrong: {error.message}</p>}
      {!loading && (
        <main className="flex flex-col md:flex-row">
          <div className="flex h-auto w-full flex-col items-center justify-center gap-6 bg-dark-green p-4 text-center md:h-screen md:w-[40%] md:gap-10">
            <h3 className="text-3xl capitalize text-light-white md:text-5xl">
              {postDetails.title}
            </h3>
            <p className="text-lg text-grey-green md:text-2xl">
              {postDetails.body}
            </p>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
                src={customer1}
                alt="customer1"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
                src={customer2}
                alt="customer2"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
                src={customer3}
                alt="customer3"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
                src={customer4}
                alt="customer4"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
                src={customer5}
                alt="customer5"
              />
            </div>
          </div>
          <div className="w-full p-4 md:w-[60%]">
            <h4 className="my-8 text-center text-3xl font-semibold text-dark-green md:my-16 md:text-5xl">
              post <span className="text-medium-green">comments</span>
            </h4>
            <div className="comments grid grid-cols-1 gap-6 p-3 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex flex-col gap-4 rounded-lg bg-dark-green p-4 text-white md:p-7"
                >
                  <div className="m-auto flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-white text-white md:h-[3rem] md:w-[3rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0a5c5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-bubble-text"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10h10" />
                      <path d="M9 14h5" />
                      <path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" />
                    </svg>
                  </div>
                  <h5 className="text-md capitalize md:text-lg">
                    {comment.name}
                  </h5>
                  <p className="text-xs text-grey-green">{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default PostDetailsPage;
