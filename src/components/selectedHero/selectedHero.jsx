import Chart from "../chart/chart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Powerstats } from "../stats/powerstats";
import { Appearances } from "../stats/appearances";

export const SelectedHero = () => {
    const cart = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row text-white text-center">
                <div className="col-12 col-md-6">
                    <h5>Your Team</h5>
                    <h2>Appearances</h2>
                    <Appearances />
                </div>
                <div className="col-12 col-md-6">
                    <h5>Your Team</h5>
                    <h2>Powerstats</h2>
                    <Powerstats />
                </div>
            </div>

            <div>
                <h1 className="text-white text-center mt-2">This is Your Team</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-5">
                {cart.map((heroe, pos) => (
                    <div className="col mt-5" key={pos}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={heroe.image.url}
                                        alt="SuperHero "
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
                                            <button type="button" className="btn btn-dark" onClick={() => dispatch({ type: "REMOVE", payload: heroe })}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


