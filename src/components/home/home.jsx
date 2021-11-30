import "./home.scss";
import axios from "axios";
import { useState } from "react";
import { FlipCardBack } from "../flipCardBack/flipCardBack";
import { Link } from "react-router-dom";

export const Home = (id) => {
  const [searchHero, setSearchHero] = useState("");
  const [hero, setHero] = useState([]);

  const handleClick = () => {
    axios.get(`/10223769438797732/search/${searchHero}`).then((res) => {
      const data = res.data;
      setHero(data);
      console.log(data.results);
    });
  };

  return (
    <div className="subtitle text-center">
      <div>
        <h1>Find new team members!</h1>
      </div>

      <div className="searchHero">
        <div className="m-1">
          <input
            type="text"
            className="form-control inputHero"
            value={searchHero}
            onChange={(e) => setSearchHero(e.target.value)}
            placeholder="Find a hero for your team"
          />
        </div>
        <div className="m-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 mb-5">
        {hero?.results?.map((heroe, pos) => (
          <div className="col mt-5" key={pos}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={heroe.image.url}
                    alt="Hero Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <p className="titleHero">{heroe.name}</p>
                </div>

                <div className="flip-card-back">
                  <h2>Powerstats</h2>
                  <div>
                    <FlipCardBack />
                  </div>
                  <div className="buttonHero">
                    <div>
                      <Link to={`/character/${id}`}>
                        <button type="button" className="btn btn-dark">
                          Details
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button type="button" className="btn btn-dark">
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
    </div>
  );
};
