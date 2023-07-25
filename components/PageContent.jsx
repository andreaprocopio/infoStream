import React from 'react'

const PageContent = (props) => {
  return (
    <div className='mt-[100px] px-10 w-full md:max-w-6xl mx-auto flex-grow z-20 overflow-x-auto mb-5'>
      {props.children}
    </div>
  )
}

export default PageContent
