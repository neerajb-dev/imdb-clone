import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MenuDrawer } from '../../components/menuDrawer/menu-drawer.component';
import "./navbar.styles.scss";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    console.log(showMenu);

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="!#">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="!#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="!#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="!#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-in" className="nav-link">Sign In</Link>
                            </li>
                            <li>
                                <button className="btn btn-light" onClick={handleMenu}>Menu</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {
                showMenu && <MenuDrawer handleMenu={handleMenu} /> 
            }

            <Outlet />
        </div>

    )
};

export default Navbar;