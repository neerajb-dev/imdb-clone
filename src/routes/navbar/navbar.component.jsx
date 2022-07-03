import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { MenuDrawer } from '../../components/menuDrawer/menu-drawer.component';
import BrandLogo from '../../assets/imdb-logo-575.svg';
import "./navbar.styles.scss";
import Button from '../../components/button/button.component';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SearchBox } from '../../components/search-box/search-box.component';

const Navbar = () => {

    let navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    
    const handleSignIn = () => {
        navigate("/sign-in");
    }

    console.log(showMenu);

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container d-flex justify-content-center align-items-center">
                    <Link to="/"><img src={BrandLogo} alt="imdb-logo" className="navbar-brand" width={"80px"} /></Link>
                    <Button onClick={handleMenu} btnText='Menu' btnType='nav_menu_btn' Icon={<GiHamburgerMenu size="24px" className="me-2" />} />
                    <SearchBox />
                    <Button btnText='Sign-in' btnType='sign_in_btn' onClick={handleSignIn}/>
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