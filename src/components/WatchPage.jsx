import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex w-full'>
      <div>
        <iframe width="900" height="415" 
        src={"https://www.youtube.com/embed/"+searchParams.get('v')} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    
  )
}

export default WatchPage