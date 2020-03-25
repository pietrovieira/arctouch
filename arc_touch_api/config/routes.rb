Rails.application.routes.draw do
  get '/movie/upcoming', to: 'movie#upcoming'
  get '/genre/movie/list', to: 'movie#genre_movie_list'
  get '/movie/:movie_id', to: 'movie#detail'
  get '/search/movie', to: 'movie#search'
end
