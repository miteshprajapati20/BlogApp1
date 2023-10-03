import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'

const CategoryPage = () => {

  const {dark } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className='mb-12'>

      <Header />

      <div className='mt-20 flex justify-center items-center gap-6 '>
        <button className={`px-2  font-bold py-1 border  shadow-md shadow-black  text-black rounded-md  ${dark ? 'bg-slate-700' : 'bg-white'} `} onClick={() =>  navigation(-1) }>
          Back
        </button>
        <h2 className={`${dark ? 'text-white ' : 'text-black'} font-bold text-[1.2rem] `}>Blogs On <span>{category}</span></h2>
      </div>

      <Blog />

      <Pagination />

    </div>
  )
}

export default CategoryPage
