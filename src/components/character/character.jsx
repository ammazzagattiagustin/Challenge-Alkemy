import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const [powerstats, setPowerstats] = useState([]);

  useEffect(() => {
    axios.get(`/10223769438797732/${id}/powerstats`).then((res) => {
      const data = res.data;

      console.log(data);

      setPowerstats(data);
    });
  }, []);

  return (
    <div>
      <h1>{powerstats.speed}</h1>
      <div>
        {Object.values(powerstats).filter((character) => (character.id = id))}
      </div>
    </div>
  );
};
