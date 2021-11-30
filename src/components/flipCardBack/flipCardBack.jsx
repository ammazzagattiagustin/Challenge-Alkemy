import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FlipCardBack = () => {
  const { heroId } = useParams();
  const [powerstats, setPowerstats] = useState([]);

  useEffect(() => {
    axios.get(`/10223769438797732/${heroId}/powerstats`).then((res) => {
      const data = res.data;
      setPowerstats(data);

      console.log(data);
    });
  }, []);

  return (
    <div>
      <div>{powerstats.speed}</div>
    </div>
  );
};
