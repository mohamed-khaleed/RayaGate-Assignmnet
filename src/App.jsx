import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from 'react';
import Posts from "./components/Posts";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
