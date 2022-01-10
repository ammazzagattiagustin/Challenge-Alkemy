import "./home.scss"
import { Navbar } from "../navbar/navbar";
import { SelectedHero } from "../selectedHero/selectedHero"
import { useSelector } from "react-redux";

export const Home = () => {
    const cart = useSelector((state) => state);

    return (
        <div>
            <Navbar />
            {cart ? ( //cart.lenght > 0
                <div>
                    <SelectedHero />
                </div>
            ) : (
                    <div className="container text-white">
                        <h2>Your Team</h2>
                        <hr />
                        <div className="mainText text-center m-5">
                            <h3>Add heroes to your team!</h3>
                        </div>
                    </div>
                )}
        </div>
    )
}
