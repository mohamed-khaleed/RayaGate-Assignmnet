import React from 'react';
function CommentItem({name,body}) {
  return (
    <div
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
      {name}
    </h5>
    <p className="text-xs text-grey-green">{body}</p>
  </div>
  )
}

export default CommentItem
