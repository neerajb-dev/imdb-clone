import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MenuDrawer } from '../../components/menuDrawer/menu-drawer.component';
import BrandLogo from '../../assets/imdb-logo-575.svg';
import "./navbar.styles.scss";
import Button from '../../components/button/button.component';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SearchBox } from '../../components/search-box/search-box.component';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    console.log(showMenu);

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <Link to="/"><img src={BrandLogo} alt="imdb-logo" className="navbar-brand" width={"80px"} /></Link>
                    <Button onClick={handleMenu} btnText='Menu' btnType='nav_menu_btn' Icon={<GiHamburgerMenu size="24px" className="me-2"/>}/>
                    <SearchBox/>
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