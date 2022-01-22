import "./search.scss";
import Chart from "../chart/chart";
import axios from "axios";
import { Navbar } from "../navbar/navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Search = ({ heroe }) => {

  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const [searchHero, setSearchHero] = useState("");
  const [hero, setHero] = useState([]);

  const handleClick = () => {
    axios.get(`/10223769438797732/search/${searchHero}`).then((res) => {
      const data = res.data;
      setHero(data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className="searchColor text-center">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="searchTitle">Find new team members</h1>
          </div>

          <div className="searchFinder mt-3 mb-2">
            <div className="m-1">
              <input
                type="text"
                className="form-control searchInput"
                value={searchHero}
                onChange={(e) => setSearchHero(e.target.value)}
                placeholder="Find a hero for your team"
              />
            </div>
            <div className="m-1">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>

          <div>
            <p>Remember that your team must be made up of a maximum of 3 villains and 3 heroes.</p>
          </div>

          <div className="row row-cols-1 row-cols-md-3 mb-5">
            {hero?.results?.map((heroe, pos) => (
              <div className="col mt-5  animate__animated animate__fadeIn" key={pos}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={heroe.image.url}
                        alt="Hero Detail"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <p className="cardTitle">{heroe.name}</p>
                    </div>

                    <div className="flip-card-back">
                      <div>
                        {heroe.biography.alignment === "good" ?
                          <button className="alignmentHero btn btn-success btn-sm mt-1 mb-2">Hero</button>
                          :
                          <button className="alignmentHero btn btn-danger btn-sm mt-1 mb-2">Villain</button>
                        }
                      </div>
                      <div>
                        <Chart heroe={heroe} />
                      </div>
                      <div className="cardButton">
                        <div>
                          <Link to={`/character/${heroe.id}`}>
                            <button type="button" className="btn btn-dark">
                              Details
                            </button>
                          </Link>
                        </div>
                        <div>
                          <button onClick={() => dispatch({ type: "ADD", payload: heroe })} className="btn btn-dark">
                            Add hero
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};
