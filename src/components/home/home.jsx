import "./home.scss"
import { connect } from "react-redux";
import { addHero } from "../../redux/actions/actions"

const Home = (addHero) => {
    return (
        <div className="container text-center text-white mt-4">
            <p className="mainText">You still haven`t a team, start searching and adding a HERO.</p>
            <button onClick={() => addHero("hola")}>Hola</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.hero.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addHero: (id) => dispatch(addHero(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);