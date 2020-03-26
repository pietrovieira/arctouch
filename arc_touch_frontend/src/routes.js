import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from './pages/movies';
import MovieDetail from './pages/movieDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Movies} />
      <Route path="/movie/:id" component={MovieDetail} />
    </Switch>
  );
}