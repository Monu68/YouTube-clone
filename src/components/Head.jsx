import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => 
      
      {
        if(searchCache[searchQuery]){
          setSuggestion(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestion()
        }
      }, 200);

    return () =>{
      clearTimeout(timer);
    }
    
  },[searchQuery]);

  const getSearchSuggestion = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    })
  );
  }
  
  const toggleMenuHandler = () => {
    diaptach(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg rounded-lg'>
        <div className='flex col-span-1 cursor-pointer'>
            <img 
            onClick={() => toggleMenuHandler()}
            className='h-7'
            alt='Hamburger-Menu'
            src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'
            />

            <img 
            className='h-7 mx-2'
            alt='YouTube-Logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
            />
        </div>

        <div className='col-span-10'>
            <input 
            className='px-5 w-1/2 border border-gray-500 py-1 rounded-l-full'
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            />
            <button
            className='border border-gray-500 py-1 px-4 rounded-r-full bg-gray-100'
            >🔍</button>

        {showSuggestion && ( 
          <div className='fixed bg-white border border-gray-100 px-2 py-1 w-[29.5rem] rounded-lg shadow-lg'>
          <ul>
            {suggestion.map(s => 
            <li key={s} className='py-1 shadow-sm hover:bg-gray-100 rounded-lg'>🔎 {s}</li>)}
        
          </ul>
        </div>)}
        </div>
        

        <div className='col-span-1'>
            <img 
            className='h-8 '
            alt='user-icon'
            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            />
        </div>
    </div>
  )
}

export default Head