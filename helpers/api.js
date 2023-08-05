const auth = `Bearer ${process.env.MOVIEDB_API_KEY}`

export async function getTrendingMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not fetch trending movies')
    }

    const data = await res.json()
    return data
  } catch(error) {
    console.error(error)
  }
}

export async function getTrendingTv() {
  const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not fetch trending TV series')
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}

export async function getUpcomingMovies() {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error('Could not fetch Upcoming movies')
    }
    const data = await res.json()
    return data
  } catch(error) {
    console.error(error)
  }
}

export async function getMoviesGenres() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find movie genres')
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}

export async function getTvGenres() {
  const url = ('https://api.themoviedb.org/3/genre/tv/list?language=en')

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find movie genres')
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}


export async function getById(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error(`Could not find movie or tv serie. ${type} and ${id}`)
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}

export async function getCreditsById(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find credits for the selected movie.')
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}

export async function getSimilarMovies(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Error finding similar titles.')
    }

    const data = await res.json()
    return data

  } catch(error) {
    console.error(error)
  }
}

export async function getItemById(id) {
  const url = `https://api.themoviedb.org/3/find/${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  }

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find the searched movie/tv serie')
    }

    const data = await res.json()
    return data

  } catch(err) {
    console.error(err)
  }
}

export async function getTitlesByGenre(genre, pageNumber, mediaType) {
  const url = `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=${genre}&page=${pageNumber}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find titles for the selected genre')
    }

    const data = await res.json()
    return data

  } catch(err) {
    console.error(err)
  }
}

export async function getMoviesByQuery(query, pageNumber, mediaType) {
  const url = `https://api.themoviedb.org/3/search/${mediaType}?query=${query}&page=${pageNumber}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find titles for the inserted query')
    }

    const data = await res.json()
    return data

  } catch(err) {
    console.error(err)
  }
}
