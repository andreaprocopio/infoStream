import React from 'react'

const Pagination = () => {
  return (
    <div className="flex">
      <a href="#" className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        Previous
      </a>

      <a href="#" className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        Next
      </a>
    </div>
  )
}

export default Pagination
