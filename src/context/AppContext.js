import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [dark,setDark] = useState(false);
  const navigate = useNavigate();

  const toggleMode = ()=>{
    setDark(!dark);
  }

  async function fetchBlogPosts(page = 1 ,tag = null , category) {

    setLoading(true);
    let url = `${baseUrl}?page=${page}`
    if(tag){
     url += `&tag=${tag}`
    }
   if(category){
     url += `&category=${category}`
    }
    try {
     
      const result = await fetch(url);
      const data = await result.json();

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);

    }
    catch (error) {
      console.log(error);
      console.log(error.messa)
      setPage(1);
      setPosts([]);
      setTotalPages(null)
    }
    setLoading(false);
  }


  const handlePageChange = (page) => {
    navigate({search:`?page=${page}`})
    setPage(page);
    //  fetchBlogPosts(page);
  };

  

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    dark,
    setDark,
    toggleMode
  }



  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider