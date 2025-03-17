import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const diaptach = useDispatch();
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
            className='w-1/2 border border-gray-500 py-1 rounded-l-full'
            type="text"/>
            <button
            className='border border-gray-500 py-1 px-4 rounded-r-full bg-gray-100'
            >🔍</button>
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