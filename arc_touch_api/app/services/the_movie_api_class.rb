class TheMovieApiClass
    include HTTParty
    include JSON

    @@token = "1f54bd990f1cdfb230adb312546d765d"
    @@language = "en-US"
    @@base_uri = "https://api.themoviedb.org/3"


    def initialize()
        @@movies_list = []
        puts "--------------------------------------------------------------------------------"
        puts "The movie db initialize..."
        puts "token: #{@@token}"
        puts "language: #{@@language}"
        puts "base_uri: #{@@base_uri}"
        puts "--------------------------------------------------------------------------------"
    end

    def movie_upcoming
        
        first_result = get("#{@@base_uri}/movie/upcoming?api_key=#{@@token}&language=#{@@language}&page=1")
        parse_movies = JSON.parse(first_result)

        for page in 1..parse_movies['total_pages'].to_i do
            puts "fetch...page: #{page}"
            get_result_by_page = get("#{@@base_uri}/movie/upcoming?api_key=#{@@token}&language=#{@@language}&page=#{page}")
            add_movie_to_list(get_result_by_page)
        end

        puts "total_results: #{parse_movies['total_results']}"
        puts "dates: #{parse_movies['dates']}"
        puts "total_pages: #{parse_movies['total_pages']}"

        @@movies_list

    end

    def genre_movie_list
        get("#{@@base_uri}/genre/movie/list?api_key=#{@@token}&language=#{@@language}")
    end

    def movie_detail(movie_id)
        get("#{@@base_uri}/movie/#{movie_id}?api_key=#{@@token}&language=#{@@language}")
    end

    def search_movies(term)
        get("#{@@base_uri}/search/movie?query=#{query}&api_key=#{@@token}&language=#{@@language}")
    end

    private

        def add_movie_to_list(results)
            parseJson = JSON.parse(results)
            items_old = @@movies_list
            items_new = []
            parseJson['results'].each do | movie |
                items_new.push(
                    id: movie['id'],
                    poster_path: movie['poster_path'],
                    genre_ids: movie['genre_ids'],
                    title: movie['title'],
                    overview: movie['overview'],
                    release_date: movie['release_date']
                )
            end
            items_old.concat(items_new)
            pp "#{items_old}"
            pp "#{items_old.length()}"

        end

        def get(url)
            begin
                self.class.get(url,
                    headers: { 'Content-Type' => 'application/json' }
                ).to_json
            rescue => exception
                puts "--------------------------------------------------------------------------------"
                puts "Exception: #{exception}"
                puts "--------------------------------------------------------------------------------"
            end
        end

end