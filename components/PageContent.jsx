import React from 'react'

const PageContent = (props) => {
  return (
    <div className='mt-[100px] px-10 pt-5 max-w-6xl mx-auto'>
      {props.children}
    </div>
  )
}

export default PageContent