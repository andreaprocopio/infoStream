import React from 'react'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import SearchInput from '@/components/SearchInput'
import { getMoviesByQuery } from '@/helpers/api'
import { useState } from 'react'

const search = () => {

  const [foundTitles, setFoundTitles] = useState(undefined)


  const searchQuery = async (query) => {

    if (query === "") {
      return
    }

    const data = await getMoviesByQuery(query)

    setFoundTitles(data)
  }


  return (
    <>
      <PageContent>
        <SearchInput onSearchTermChange={searchQuery} />
      </PageContent>
      <Footer />
    </>
  )
}

export default search
