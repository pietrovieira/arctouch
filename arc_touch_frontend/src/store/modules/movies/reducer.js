const initialState = {
  collection: [],
  movies: [],
  movieDetail: {},
  genre: [],
  loaded: true
};

export default function movie(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case "@loaded/SET":
      return {
        ...state,
        loaded: payload
      };
    case "@genre/SET":
      return {
        ...state,
        genre: payload
      };
    case "@movie/SET":
      return {
        ...state,
        movies: payload
      };
    case "@collection/SET":
      return {
        ...state,
        collection: payload
      };
    case "@movie/ADD":
      const { oldMovies, newMovies } = payload;

      newMovies.forEach(m => {
        oldMovies.push(m);
      });

      return {
        ...state,
        movies: oldMovies
      };
    case "@movie/SET_DETAIL":
      return {
        ...state,
        movieDetail: payload
      };
    default:
      return state;
  }
}
