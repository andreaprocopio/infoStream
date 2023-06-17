const DUMMY_DATA = [
  {
    id: '1',
    title: 'Iron Man',
    director: 'Jon Favreau',
    actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Jeff Bridges'],
    year: 2008,
    genre: 'Azione',
    rating: 7.9,
    duration: 126,
    description: 'Il miliardario Tony Stark costruisce una potente armatura per diventare Iron Man e combattere il male.',
    image: '/images/movies/iron-man.jpg'
  },
  {
    id: '2',
    title: 'The Avengers',
    director: 'Joss Whedon',
    actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson'],
    year: 2012,
    genre: 'Azione',
    rating: 8.0,
    duration: 143,
    description: 'I supereroi Iron Man, Captain America, Hulk, Thor, Black Widow e Hawkeye si uniscono per salvare il mondo dal perfido Loki.',
    image: '/images/movies/avengers.jpg'
  },
  {
    id: '3',
    title: 'Guardians of the Galaxy',
    director: 'James Gunn',
    actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper'],
    year: 2014,
    genre: 'Azione',
    rating: 8.0,
    duration: 121,
    description: 'Un gruppo di improbabili eroi spaziali si unisce per combattere contro una minaccia intergalattica.',
    image: '/images/movies/guardians-of-the-galaxy.jpg'
  },
  {
    id: '4',
    title: 'Captain America: The Winter Soldier',
    director: 'Anthony Russo, Joe Russo',
    actors: ['Chris Evans', 'Scarlett Johansson', 'Sebastian Stan', 'Anthony Mackie'],
    year: 2014,
    genre: 'Azione',
    rating: 7.7,
    duration: 136,
    description: 'Il Capitano America si unisce alla Vedova Nera per svelare una cospirazione all\'interno della S.H.I.E.L.D.',
    image: '/images/movies/captain-america-the-winter-soldier.jpg'
  },
  {
    id: '5',
    title: 'Black Panther',
    director: 'Ryan Coogler',
    actors: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o', 'Danai Gurira'],
    year: 2018,
    genre: 'Azione',
    rating: 7.3,
    duration: 134,
    description: 'Il nuovo re di Wakanda, il supereroe Black Panther, deve difendere il suo regno da una minaccia esterna.',
    image: '/images/movies/black-panther.jpg'
  }
]


export function getAllMovies() {
  return DUMMY_DATA
}

export function getMovieById(id) {
  return DUMMY_DATA.find((movie) => movie.id === id)
}