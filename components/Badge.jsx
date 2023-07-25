import React from 'react'

const Badge = (props) => {

  if (!props.genre) {
    return (
      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded border-gray-800">+</span>
    )
  } else {
    return (
      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{props.genre}</span>
    )
  }

}

export default Badge
