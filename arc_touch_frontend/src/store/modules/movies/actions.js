export function putGenre(payload) {
    return {
      type: '@genre/SET',
      payload,
    };
  }
  
  export function putMovies(payload) {
    return {
      type: '@movie/SET',
      payload,
    };
  }
  
  export function putCollection(payload) {
    return {
      type: '@collection/SET',
      payload,
    };
  }
  
  export function addMovies(payload) {
    return {
      type: '@movie/ADD',
      payload,
    };
  }
  
  export function putMovieDetail(payload) {
    return {
      type: '@movie/SET_DETAIL',
      payload,
    };
  }
  
  export function setLoaded(payload) {
    return {
      type: '@loaded/SET',
      payload,
    };
  }