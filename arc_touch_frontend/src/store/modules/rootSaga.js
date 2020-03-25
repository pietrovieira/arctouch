import { all } from 'redux-saga/effects';

import movie from './movies/sagas';

export default function* rootSaga() {
  return yield all([movie]);
}
