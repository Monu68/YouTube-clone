import React from 'react'

const VideoCard = ({info}) => {
    if (!info) return <div>Loading...</div>;
    console.log(info); 
    const {snippet} = info;
    const {channelTitle, title, thumbnails} = snippet; 
  return (
      <div className='p-2 m-2 w-56 shadow-lg'>
        <img className='rounded-lg ' alt='thumbnail'
        src= {thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            {/* <li>{statistics.viewCount}</li> */}
        </ul>
      </div>

  )
}

export default VideoCard