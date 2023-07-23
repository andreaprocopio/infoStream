import React from 'react'

const GenreSelect = (props) => {

  const genres = props.genres

  const drillGenreValue = (event) => {
    props.titlesByGenre(event.target.value)
  }

  return (
    <div>
      <select id="countries" onChange={drillGenreValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Choose a genre</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  )
}

export default GenreSelect