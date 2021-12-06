import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const [detailHero, setDetailHero] = useState([]);

  useEffect(() => {
    axios.get(`/10223769438797732/${id}`).then((res) => {
      const data = res.data;

      console.log(data);

      setDetailHero(data);
    });
  }, []);

  return (
    <div>
      <h1>{detailHero.work.occupation}</h1>
      {/*       <div>
        {Object.values(detailHero).filter((character) => (character.id = id))}
      </div> */}
    </div>
  );
};

/* import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const [detailHero, setDetailHero] = useState([]);

  useEffect(() => {
    axios.get(`/10223769438797732/${id}/detailHero`).then((res) => {
      const data = res.data;

      console.log(data);

      setDetailHero(data);
    });
  }, []);

  return (
    <div>
      <h1>{detailHero.speed}</h1>
      <div>
        {Object.values(detailHero).filter((character) => (character.id = id))}
      </div>
    </div>
  );
};
 */
