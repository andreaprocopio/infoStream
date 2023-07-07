import React from 'react'

const CastingTable = (props) => {

  const castDataOrderedByPopularity = [...props.cast].sort((a, b) => b.popularity - a.popularity);
  const mainCast = castDataOrderedByPopularity.slice(0, 5);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead
                className="border-b bg-white font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Character</th>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Popularity</th>
                </tr>
              </thead>
              <tbody>
                {mainCast.map((castMember, index) => (
                  <tr className="border-b bg-white" key={castMember.id}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{castMember.character}</td>
                    <td className="whitespace-nowrap px-6 py-4">{castMember.original_name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{castMember.popularity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CastingTable