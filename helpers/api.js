export async function getTrendingMovies() {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
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
      throw new Error('Impossibile caricare i titoli.')
    }

    const data = await res.json()
    return data
  } catch(error) {
    console.error(error)
  }
}