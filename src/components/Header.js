import React, { useContext } from 'react'
import { MdOutlineLightMode, MdLightMode } from 'react-icons/md'
import { AppContext } from '../context/AppContext'


const Header = () => {

  const { dark, toggleMode } = useContext(AppContext);

  return (
    <div className={`w-full border flex fixed top-0 shadow-xl items-center justify-center  ${dark ? 'bg-slate-700' : 'bg-white'}`} >
      <div className='flex gap-x-52'>
        <h1 className={`font-bold text-2xl p-2 ${dark ? 'text-white' : 'text-black'} `}>Mitzzz'ssss Blogzz</h1>
       
        <button  className='flex mt-3 gap-3' onClick={toggleMode}>
          
           {
          dark ? ( <h1 className='text-white font-semibold'>Light</h1> ) : ( <h1 className='font-semibold'>Dark</h1> )
        }
        {
            dark ? (<MdLightMode className='text-white' />)  : (<MdOutlineLightMode />) 
          }

        </button>
      </div>

    </div>
  )
}

export default Header
