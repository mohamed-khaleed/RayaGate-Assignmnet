import DetailsHeader from "../components/DetailsHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        console.log(postData, "postData");
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
      <DetailsHeader />
      {/* <div className="post-details">
      <h2>{postDetails.title}</h2>
      <p>{postDetails.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong> ({comment.email})</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
     </div> */}
      <main className="flex">
        <div className="flex  w-[40%] flex-col items-center justify-center gap-10 bg-dark-green p-8 text-center">
          <h3 className="text-5xl capitalize text-light-white">
            {postDetails.title}
          </h3>
          <p className="text-grey-green text-2xl">{postDetails.body}</p>
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="s"
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/docs/images/people/profile-picture-2.jpg"
              alt="s"
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="s"
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/docs/images/people/profile-picture-4.jpg"
              alt="s"
            />
          </div>
        </div>
        <div className="w-[60%]">
          <h4 className="my-16 text-center text-5xl font-semibold text-dark-green">
            post <span className="text-medium-green">comments</span>
          </h4>
          <div className="comments grid grid-cols-1 gap-10 p-3 md:grid-cols-2 lg:grid-cols-3">
            {comments.map((comment) => (
              <>
                <div
                  key={comment.id}
                  className="flex flex-col gap-4 rounded-lg bg-dark-green p-7 text-white "
                >
                  <div className="m-auto flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white text-white">
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
                  <h5 className="text-lg capitalize">{comment.name}</h5>
                  <p className="text-grey-green text-xs">{comment.body}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PostDetailsPage;
