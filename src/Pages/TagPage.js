import React from 'react'
import Header from '../components/Header';
import Blog from '../components/Blog';
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';

const TagPage = () => {
  
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>  
      <button onClick={() => navigation(-1)}>
        Back
      </button>
      <h2>Blogs Tags <span>#{tag}</span></h2>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default TagPage
