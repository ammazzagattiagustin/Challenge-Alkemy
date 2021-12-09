import "./navbar.scss";


export const Navbar = () => {



  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand">SuperHero</a>
          <div className="d-flex">
            <button className="btn btn-danger" >Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
};
