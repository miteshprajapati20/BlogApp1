import React, { useContext, useEffect } from 'react'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'
import {Routes,Route, useLocation, useSearchParams} from 'react-router-dom'

import { AppContext } from './context/AppContext'

const App = () => {

  const { fetchBlogPosts ,dark } = useContext(AppContext);

  const [serchParamas ,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

       const page = serchParamas.get("page") ?? 1;


   if(location.pathname.includes("tags")){
    const tag = location.pathname.split("/").at(-1).replaceAll("-" ," ");
    fetchBlogPosts(Number(page),tag);
   }
   else if(location.pathname.includes("categories")){
    const categories = location.pathname.split("/").at(-1).replaceAll("-" ," ");
    fetchBlogPosts(Number(page),null,categories);
   }
   else{
    fetchBlogPosts(Number(page));
   }

  }, [location.pathname , location.search ])

  return (
    <div className={`'w-full h-full flex flex-col  gap-y-1  ${dark ? 'bg-slate-800 ' : ' bg-white'} `} >

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog/:blogId' element={<BlogPage />} />
        <Route path='tags/:tag' element={<TagPage />} />
        <Route path='categories/:category' element={<CategoryPage />} />
      </Routes>


    </div>
  )
}

export default App
