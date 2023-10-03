import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "../components/Spinner"
import BlogDetails from './BlogDetails';

const Blog = () => {

  const { posts, loading } = useContext(AppContext);

  return (
    <div className={`w-11/12 max-w-[650px] overflow-hidden m-auto   `}>
      {
        loading ?
          (<Spinner />) :
          (posts.length === 0 ?
            (<div className='flex justify-center mt-56 font-bold  text-3xl'>
              <h1>No Data Found</h1>
            </div>)
            : (
              posts.map((post) =>

             <BlogDetails key={post.id} post={post}/>
              )))
      }
    </div>
  )
}

export default Blog
