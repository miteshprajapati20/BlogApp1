import React, { useContext } from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'


const Home = () => {
  const {dark} = useContext(AppContext)
  return (
    <div className={` mt-9 mb-12 `}>
      <Header />
      <div>
        <Blog />
        <Pagination />
      </div>
    </div>
  )
} 

export default Home
