import "./home.scss"
import { SelectedHero } from "../selectedHero/selectedHero"
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
    const cart = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            {cart.length > 0 ? (
                <div>
                    <SelectedHero />
                </div>
            ) : (
                    <div className="container text-center text-white mt-4">
                        <p className="mainText">You still haven`t a team, start searching and adding a HERO.</p>
                    </div>
                )}
        </div>
    )
}
