function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-20">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'bg-dark-green text-white' : 'bg-gray-200'} rounded-md`}>
            <a
              onClick={() => paginate(number)}
              href="#!"
              className={`page-link px-4 py-2 block ${number === currentPage ? 'text-white' : 'text-dark-bg-dark-green'}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination
