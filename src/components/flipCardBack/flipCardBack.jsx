import "./flipCardBack.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FlipCardBack = () => {
  const { heroId } = useParams();
  const [powerstats, setPowerstats] = useState([]);

  useEffect(() => {
    axios.get(`/10223769438797732/${heroId}`).then((res) => {
      const data = res.data;
      setPowerstats(data);
      console.log(data);
    });
  }, [heroId]);

  return (
    <div>{powerstats ? <p>{heroId}</p> : <p>Item no encontrado...</p>}</div>
  );
};
