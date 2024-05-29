import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import customer1 from "../assets/images/customer-1.jpg";
import customer2 from "../assets/images/customer-2.jpg";
import customer3 from "../assets/images/customer-3.jpg";
import customer4 from "../assets/images/customer-4.jpg";
import customer5 from "../assets/images/customer-5.jpg";
import LoadingPage from "./LoadingPage";
import ImageItem from "../components/ImageItem";
import CommentItem from "../components/CommentItem";

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
          <div className="flex h-auto w-full flex-col items-center justify-center gap-6 bg-dark-green p-4 text-center  md:w-[40%] md:gap-10">
            <h3 className="text-3xl capitalize text-light-white md:text-5xl">
              {postDetails.title}
            </h3>
            <p className="text-lg text-grey-green md:text-2xl">
              {postDetails.body}
            </p>
            <div className="flex -space-x-4 rtl:space-x-reverse">
               <ImageItem src={customer1} alt={"customer1"}/>
               <ImageItem src={customer2} alt={"customer2"}/>
               <ImageItem src={customer3} alt={"customer3"}/>
               <ImageItem src={customer4} alt={"customer4"}/>
               <ImageItem src={customer5} alt={"customer5"}/>
            </div>
          </div>
          <div className="w-full p-4 md:w-[60%]">
            <h4 className="my-8 text-center text-3xl font-semibold text-dark-green md:my-20 md:text-5xl">
              post <span className="text-medium-green">comments</span>
            </h4>
            <div className=" grid grid-cols-1 gap-6 p-3 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {comments.map((comment) => (
                <CommentItem key={comment.id} name={comment.name} body={comment.body} />
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default PostDetailsPage;
