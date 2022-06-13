// import Reac from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import './NavBar';

const NavBar = () => {

  return (
    <div className='navBar my-3 pb-3'>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container-fluid mx-3">
                <Link to="/" className="text-decoration-none" >
                    <a className="navbar-brand">
                        <img alt="" src="logo.png" width="60" height="60"
                        className="d-inline-block align-center" />
                        &nbsp;&nbsp;&nbsp;lighting .net
                    </a>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto" style={{ fontSize: "140%" }}>
                        <div className="nav-item px-2"> 
                            <Link to="/" className="text-decoration-none" >
                                <a className="nav-link" aria-current="page" >
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className="nav-item px-2">
                            <Link to="/nosotros" className="text-decoration-none" >
                                <a className="nav-link" >
                                    Sobre Nosotros
                                </a>
                            </Link>
                        </div>
                        <div className="nav-item dropdown px-2">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Productos
                            </a>
                            <div className="dropdown-menu" style={{ fontSize: "100%" }}>
                                <Link to="/tipo/lampara" className="text-decoration-none" >
                                    <a className="dropdown-item" >
                                        Lámparas
                                    </a>
                                </Link>
                                <Link to="/tipo/luminaria" className="text-decoration-none" >
                                    <a className="dropdown-item" >
                                        Luminarias
                                    </a>
                                </Link>
                                <Link to="/tipo/proyector" className="text-decoration-none" >
                                    <a className="dropdown-item" >
                                        Proyectores
                                    </a>
                                </Link>
                                {/* linea divisoria */}
                                <hr className="dropdown-divider" />
                                <Link to="/productos" className="text-decoration-none" >
                                    <a className="dropdown-item" >
                                        Todos los Productos
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;