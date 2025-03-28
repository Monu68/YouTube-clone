import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(closeMenu());
    },[])
  return (
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UU4LJlPp1OA?si=sbHGuS8IIob7cIVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage