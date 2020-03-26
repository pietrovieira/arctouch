import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import { useDispatch, useSelector } from "react-redux";

const MovieDetail = ({ history, match }) => {
  const dispatch = useDispatch();
  const { movieDetail: detail } = useSelector(state => state.movie);

  const { params } = match;

  const { id } = params;

  React.useEffect(() => {
    dispatch({
      type: "@movie/SHOW_DETAIL",
      payload: id
    });
  },[]);

  return (
    <>
      <section className="flex flex-col h-screen justify-between">
        <Header />
        <div className="h-full flex flex-col items-center">
          <div className="m-10 mx-auto">
            {detail && detail.title !== undefined && (
              <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                <img
                  src={detail.poster_path}
                  className="w-full max-w-img"
                  alt={detail.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{detail.title}</div>
                  <p className="text-gray-700 text-base">{detail.overview}</p>
                  <p className="text-gray-700 mt-4 text-sm text-base">Release Date: {detail.release_date}</p>
                </div>
                <div className="px-6 py-4">
                {detail.genres.map((g, i) => (
                    <span
                      key={g.id}
                      className="inline-block mb-4 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {detail.title === undefined && (
              <div style={{minHeight: '430px', minWidth: '390px'}} className="max-w-sm w-full rounded overflow-hidden shadow-lg">
                <span className="bg-gray-200 block w-full" style={{minHeight: '250px'}}>
                </span>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 w-full bg-gray-200" style={{minHeight: '30px'}}></div>
                  <p className="text-gray-700 text-base  w-full bg-gray-200" style={{minHeight: '120px'}}></p>
                </div>
                <div className="px-6 py-4">
                    <span
                      style={{minWidth: '80px', minHeight: '40px'}}
                      className="inline-block inline-block mb-4 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                    </span>
                    <span
                      style={{minWidth: '80px', minHeight: '40px'}}
                      className="inline-block inline-block mb-4 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                    </span>
                    <span
                      style={{minWidth: '80px', minHeight: '40px'}}
                      className="inline-block inline-block mb-4 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                    </span>
                </div>
              </div>
            )}
            <a
              href="/"
              className="flex-shrink-0 mt-8 float-right inline-block bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Voltar
            </a>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default MovieDetail;
