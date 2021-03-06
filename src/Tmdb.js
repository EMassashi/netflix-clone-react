const API_KEY = '75903aa09494847ed213ba3299b05ce3';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (url) => {
  const req = await fetch(`${API_BASE}${url}`);
  const json = await req.json();
  return json;
}

export default {

  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_networks=213`)
      },
      {
        slug: 'trending',
        title: 'Em Alta',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR&`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`)
      }
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)

          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)
          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  }
}