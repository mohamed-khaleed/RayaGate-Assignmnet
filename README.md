# React + Vite

Description
This project is a React application styled with Tailwind CSS for modern and responsive UI design. It utilizes React's state management with useState and useContext for managing global state using Context API. Data fetching is handled with useEffect, and routing is managed with React Router. Unit testing is implemented using Jest. The project is built with Vite for fast and efficient development.
////////////////////////////////////
Folder Structure

project-root/
│
├── __tests__/            # Contains test files
│
├── assets/               # Contains images and other static assets
│
├── components/           # Contains reusable components for the app
│
├── context/              # Contains context files for global state management
│
├── pages/                # Contains page components for the app
│
└── ...
////////////////////////////
Technologies Used :
React
Tailwind CSS
React Router
Jest
Vite

/////////////////

Getting Started:
Clone the repository:
git clone https://github.com/yourusername/project-name.git

///////////////////////

Install dependencies:
cd project-name
npm install

////////////////////////

Run the development server:
npm run dev

///////////////////////////////////////

Testing:
To run tests, execute the following command:
npm test

///////

note:
The pagination part could be implemented using the API like this:
https://jsonplaceholder.typicode.com/posts?_start=${(currentPage - 1) * postsPerPage}&_limit=${itemsPerPage}

_start: Specifies the starting point for fetching results.
_limit: Determines the maximum number of items to return per page.
_start is calculated as (currentPage - 1) * postsPerPage.

However, in my code, I implemented pagination from the result array of posts. This approach ensures that the search functionality works across all posts, rather than being limited to the results of a single page.