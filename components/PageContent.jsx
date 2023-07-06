import React from 'react'

const PageContent = (props) => {
  return (
    <div className='mt-[100px] px-10 max-w-6xl mx-auto flex-grow'>
      {props.children}
    </div>
  )
}

export default PageContent