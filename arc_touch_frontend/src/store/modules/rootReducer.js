import { combineReducers } from 'redux';

import movie from './movies/reducer';

export default combineReducers({
  movie,
});