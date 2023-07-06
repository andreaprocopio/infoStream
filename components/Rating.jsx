import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Rating = (props) => {
  return (
    <div className='flex items-center gap-1 justify-start'>
      <p className="font-normal text-gray-400">{props.rating}</p>
      <AiOutlineStar size={15} className='text-amber-400'/>
    </div>  
  )
}

export default Rating