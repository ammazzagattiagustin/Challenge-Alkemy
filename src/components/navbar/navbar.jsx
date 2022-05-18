import "./navbar.scss"
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">SuperHero</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/home" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/search" className="nav-item nav-link active">
                Search
              </Link>
            </ul>
            <form className="d-flex">
              <button className="btn btn-danger" type="text" onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
