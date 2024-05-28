import React from 'react';
function LoadingPage() {
  return (
    <div className="h-screen bg-dark-green flex justify-center items-center transition-opacity ">
      <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"/>
    </div>
  )
}

export default LoadingPage
