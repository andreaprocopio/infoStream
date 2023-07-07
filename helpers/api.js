export async function getTrendingMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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


export async function getById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
    }
  };
  
  try {
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Could not find movie or tv serie.')
    }

    const data = await res.json()
    return data
    
  } catch(error) {
    console.error(error)
  }
}

export async function getCreditsById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGE1Yzk1YzlkOGQ3MWUzMDE4ODM4NjNjZThiOTU4MCIsInN1YiI6IjY0OGY3NDRhNDJiZjAxMDBhZTMyMTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._i5kqlYKtgpwNppB3bMgY2S5WvbBR1teOrWNR6MiuGE'
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