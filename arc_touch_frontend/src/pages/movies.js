import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

const Movies = () => {
  const dispatch = useDispatch();

  const [searchQuery,setSearchQuery] = React.useState(null);

  const { movies, genre, loaded } = useSelector(state => state.movie);

  React.useEffect(() => {
    //start
    dispatch({
      type: "@movie/GET_UPCOMING"
    });
  }, []);

  const handleChange = (value) => {
    if ( value.target.value !== null && value.target.value != '' )
    {
      setSearchQuery(value.target.value);
    }else{
      setSearchQuery('');
    }
  }

  React.useEffect(() => {
    dispatch({
      type: "@movie/SEARCH_MOVIES",
      payload: searchQuery
    })
  },[searchQuery]);
  

  return (
    <>
      <section className="flex flex-col justify-between">
        <Header />
        <div className="h-full flex flex-col items-center">
        {loaded && (
          <div className="w-full max-w-md my-6">
            <div className="flex border-b border-b-2 border-orange-500 py-2">
              <input
                className="appearance-none text-gray-500 bg-transparent border-none w-full text-orange-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Movie name"
                aria-label="Movie name"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
          <div className="mx-auto mb-10">
            {loaded && (
              <table style={{width: '1300px' }} className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2" style={{ width: "150px" }}>
                      Poster/Backdrop
                    </th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Genre</th>
                    <th className="px-4 py-2">Release Date</th>
                    <th className="px-4 py-2">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {movies &&
                    movies.map(movie => (
                      <tr key={movie.id} className="bg-gray-100">
                        <td className="border px-4 py-2">
                          <img
                            src={movie.poster_path}
                            className="w-full max-w-img"
                            alt={movie.title}
                          />
                        </td>
                        <td className="border px-4 py-2">{movie.title}</td>
                        <td className="border px-4 py-2">
                          {movie.genre_ids.map((g, i) => (
                            <label key={g.id}>
                              {i > 0 ? ", " : ""}
                              {genre.filter(f => f.id === g)[0].name}
                            </label>
                          ))}
                        </td>
                        <td className="border px-4 py-2">
                          {movie.release_date}
                        </td>
                        <td
                          className="border px-4 py-2"
                          style={{ width: "150px" }}
                        >
                          <Link
                            to={`/movie/${movie.id}`}
                            className="flex-shrink-0 bg-orange-500 w-full hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded"
                          >
                            Show Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
            {!loaded && (
              <button className="bg-loader mt-10 text-white py-2 px-4 rounded inline-flex items-center">
                <span>Loading...</span>
              </button>
            )}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Movies;
