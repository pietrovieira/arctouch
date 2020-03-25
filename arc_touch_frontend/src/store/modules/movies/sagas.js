import {  call, put, select, delay, all, takeLatest } from 'redux-saga/effects';

import { setLoaded, putGenre, putMovieDetail, putMovies, putCollection } from './actions';

import api from "../../../api";

function* getUpcoming() {
  try{
    yield put(setLoaded(false));
    const {
      status : statusGenre,
      data : dataGenre
    } = yield call(api.get,`/genre/movie/list`);
    if ( statusGenre === 200 )
    {
      const {
        genres
      } = dataGenre;
      yield put(putGenre(genres));
      
      const {
        status: statusMovies,
        data : dataMovies,
      } = yield call(api.get, `/movie/upcoming`);
      if ( statusMovies === 200 )
      {
        const {
          results
        } = dataMovies;
        yield put(putMovies(results));
        yield put(putCollection(results));
        yield put(setLoaded(true));

      }
    }
  }catch(err){
    console.log("err", err);
  }
}

function* searchMoviesByQuery({payload}) {
  try{
      yield put(putMovies({}));
      const collectionState = (state) => state.movie.collection;
      const collection = yield select(collectionState);
      const results = collection.filter( m => String(m.title).toLowerCase().search(String(payload).toLowerCase()) > -1 );
      yield put(putMovies(results));
  }catch(err){
    console.log("err", err);
  }
}

function* getShowDetail({
  payload
}) {
  const {
    status,
    data
  } = yield call(api.get,`/movie/${payload}`);
  if ( status === 200 )
  {
    yield put(putMovieDetail(data));
  }

}

export default all([
  takeLatest('@movie/GET_UPCOMING', getUpcoming),
  takeLatest('@movie/SEARCH_MOVIES', searchMoviesByQuery),
  takeLatest('@movie/SHOW_DETAIL', getShowDetail),
]);