import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages ,dark , toggleMode} = useContext(AppContext);
  
  return (
    <div className={`flex  w-full justify-center fixed bottom-0 left-0 p-3  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] overflow-hidden ${dark ? 'bg-slate-700' : 'bg-white'} `}>
      <div className='flex flex-1 w-11/12 max-w-[650px] gap-4 '>
        <div>
          {page > 1 && (
            <button
              className={`px-2 font-semibold py-1 border ${dark ? 'bg-slate-900' : 'bg-white'} shadow-md  shadow-black ${dark ? 'text-white ' : 'text-black'} rounded-md`}
              onClick={() =>    handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
        </div>
        <div>
          {page < totalPages && (
            <button
              className={`px-2 font-semibold py-1 border ${dark ? 'bg-slate-900' : 'bg-white'} shadow-md  shadow-black ${dark ? 'text-white ' : 'text-black'} rounded-md`}
              onClick={() => 
                handlePageChange(page + 1)
              }
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className={`item-center text-[1.2rem] font-bold mr-10 ${dark ? 'text-white ' : 'text-black'} `}>
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
