class MovieController < ApplicationController

    def upcoming
        the_movie_api_class = TheMovieApiClass.new
        @results = the_movie_api_class.movie_upcoming
        render json: { results: @results }
    end
    
    def genre_movie_list
        the_movie_api_class = TheMovieApiClass.new
        @results = the_movie_api_class.genre_movie_list
        render json: @results
    end
    
    def detail
        the_movie_api_class = TheMovieApiClass.new
        @results = the_movie_api_class.movie_detail(params[:movie_id])
        render json: @results
    end
    
    def search
        the_movie_api_class = TheMovieApiClass.new
        @results = the_movie_api_class.search_movies(params[:term])
        render json: @results
    end

end
