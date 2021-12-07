import "./character.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      {detailHero && (
        <div className="container-fluid row">
          <div className="col-12 col-md-6 mt-5 text-center">
            <img
              src={detailHero.image.url}
              alt="Hero Image"
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
                Aliases: <span>{detailHero.biography.aliases}</span>
              </p>
              <p>
                Work base: <span>{detailHero.work.base}</span>
              </p>
              <p>
                Weight: <span>{detailHero.appearance.weight}</span>
              </p>
              <p>
                Height: <span>{detailHero.appearance.height}</span>
              </p>
              <p>
                Hair color: <span>{detailHero.appearance.hair - color}</span>
              </p>
              <p>
                Eye color: <span>{detailHero.appearance.height}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
