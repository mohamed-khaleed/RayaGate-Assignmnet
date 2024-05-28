import { Link } from "react-router-dom"
import React from 'react';
function PostItem({id, title, body,}) {
  return (
    <div
    className="flex h-80 flex-col justify-between rounded bg-white p-5 shadow-md "
  >
    <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-dark-green text-white">
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
    <h3 className="md:text-xl font-semibold capitalize text-dark-green  sm:text-sm">
      {title}
    </h3>
    <p className="text-light-grey md:text-base sm:text-xs">{body}</p>
    <Link
      to={`/post/${id}`}
      aria-label={`Read more about ${title}`}
      className="flex w-[150px] gap-1 rounded py-2 font-bold capitalize text-dark-green underline underline-offset-4 hover:text-medium-green"
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
    </Link>
  </div>
  )
}

export default PostItem
