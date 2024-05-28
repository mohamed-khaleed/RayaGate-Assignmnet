import React from 'react';
function ImageItem({src, alt}) {
  return (
    <img
    className="h-10 w-10 rounded-full border-2 border-white md:h-14 md:w-14"
    src={src}
    alt={alt}
  />
  )
}

export default ImageItem
