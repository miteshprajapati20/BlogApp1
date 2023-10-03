import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {
  const newUrl = 'https://codehelp-apis.vercel.app/api/'
  const { setLoading, loading ,dark } = useContext(AppContext);

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState(null);
  const navigation = useNavigate();
  const location = useLocation();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true)
    let url = `${newUrl}get-blog?blogId=${blogId}`

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs)
    }
    catch (error) {
      console.log(error)
      setBlog(null)
      setRelatedBlogs([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className=''>

      <Header />

      <div className='mt-20 flex justify-center items-center '>
        <button className={`px-2 font-semibold py-1 border ${dark ? 'bg-slate-700' : 'bg-white'} shadow-md  shadow-black ${dark ? 'text-white ' : 'text-black'} rounded-md`}
          onClick={() => navigation(-1)}>
          Back
        </button>

      </div>
      {
        loading ?
          (<div> <Spinner /> </div>)
          :
          blog ?
            (<div className='w-full' >
              <BlogDetails post={blog} />
              <div className="flex justify-center items-center">
                <h2 className={` font-extrabold text-2xl ${dark ? 'text-white ' : 'text-black'}`}>Related Blogs</h2>
              </div>
              {
                relatedBlogs.map((post) =>
                (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>))
              }
            </div>)
            :
            (
              <div>
                <p>NO Blog found</p>
              </div>
            )
      }
    </div>
  )
}

export default BlogPage
