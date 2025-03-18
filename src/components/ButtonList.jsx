import React from 'react'
import Button from './Button'

const buttonName = [
  "All", "Gaming", "Songs", "Live", "Cricket", "Socker", "News", "Cooking", "Valentine"]

const ButtonList = () => {
  return (
    <div className='flex'>
     {buttonName.map((name, index) => (
      <Button key={index} name={name} />
     ))}
    </div>
  )
}

export default ButtonList