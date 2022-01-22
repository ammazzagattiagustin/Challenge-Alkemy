import "./character.scss";
import axios from "axios";
import { Navbar } from "../navbar/navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const [detailHero, setDetailHero] = useState();

  useEffect(() => {
    axios.get(`/10223769438797732/${id}`).then((res) => {
      const data = res.data;
      console.log(data);
      setDetailHero(data);
    });
  }, [id]);

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Navbar />
      {detailHero && (
        <div className="container-fluid row">
          <div className="col-12 col-md-6 mt-5 text-center animate__animated animate__fadeInLeft">
            <img
              src={detailHero.image.url}
              alt="Hero"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          <div className="col-12 col-md-6 mt-5 text-white">
            <h1 className="titleSuperhero text-center">{detailHero.name}</h1>
            <div>
              <p>
                Full name: <span>{detailHero.name}</span>
              </p>
              <p>
                Aliases: <span>{detailHero.biography.aliases.join(", ")}</span>
              </p>
              <p>
                Work base: <span>{detailHero.work.base}</span>
              </p>
              <p>
                Weight: <span>{detailHero.appearance.weight[1]}</span>
              </p>
              <p>
                Height: <span>{detailHero.appearance.height[1]}</span>
              </p>
              <p>
                Hair color: <span>{detailHero.appearance["hair-color"]}</span>
              </p>
              <p>
                Eye color: <span>{detailHero.appearance["eye-color"]}</span>
              </p>
            </div>
            <button onClick={handleBack} className="btn btn-outline-warning mb-3">Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};
