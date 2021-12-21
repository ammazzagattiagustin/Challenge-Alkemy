import "./home.scss"
import { addHero } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../search/search"

const Home = () => {

    const products = useSelector((state) => state.hero.products);
    const dispatch = useDispatch();

    return (
        /*         <div className="container text-center text-white mt-4">
                    <p className="mainText">You still haven`t a team, start searching and adding a HERO.</p>
                </div> */
        <div>
            {products.map((heroe, pos) => (
                <div className="col mt-5" key={pos}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src={heroe.image.url}
                                    alt="Hero Image"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <p className="cardTitle">{heroe.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;
