import { useNavigate } from "react-router-dom";


export const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand">SuperHero</a>
          <div className="d-flex">
            <button onClick={handleLogout} className="btn btn-danger" >Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
};
