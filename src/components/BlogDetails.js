import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const BlogDetails = ({ post }) => {

const {dark,toggleMode} = useContext(AppContext)

  return (
    <div className={`w-11/12 max-w-[650px] m-auto overflow-hidden `}>
      <div className='mt-[1.5rem] mb-8'>
        <NavLink to={`/blog/${post.id}`}>
          <span className={`font-bold text-[1.4rem] ${dark ? 'text-white' :'text-black'}`}>{post.title}</span>
        </NavLink>

        <p className={`mt-2 ${dark ? 'text-white' :'text-black'} `}>By <span className='font-semibold'>{post.author}</span> on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className={`font-medium  ${dark ? 'text-orange-300' :'text-blue-800'} `}>{post.category}</span> </NavLink>
        </p>
        <p className={` ${dark ? 'text-white' :'text-slate-900'}`}>Posted on{" "}{post.date}</p>
        <p className={` ${dark ? 'text-white' :'text-slate-900'}`}>
          {post.content}
        </p>

        <div className={`mt-2 ${dark ? 'text-cyan-500' :'text-blue-800'}`}>
          {
            post.tags.map((tag, index) => (
              <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span>{`#${tag}`}</span>
              </NavLink>
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default BlogDetails
