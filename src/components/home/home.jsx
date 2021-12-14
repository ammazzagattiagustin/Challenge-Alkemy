import "./home.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Chart from "../chart/chart";
import axios from "axios";

export const Home = (heroe) => {

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
      {/*       <div>
        {!hero ? <h1>hola</h1> : <p>You still haven`t a team, start searching and adding a HERO</p>}
      </div> */}
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
            type="submit"
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
                  <div className="buttonHero">
                    <div>
                      <Link to={`/character/${heroe.id}`}>
                        <button type="button" className="btn btn-dark">
                          Details
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button className="btn btn-dark">
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
