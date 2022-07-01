import { MenuDrawerHeader } from './menu-drawer-header';
import { MenuDrawerItems } from './menu-drawer-items';
import './menu.styles.scss';

export const MenuDrawer = ({ handleMenu }) => {
    return (
        <div className="menuDrawer container-fluid bg-dark position-absolute top-0">
            <div className="menuDrawer-content container d-flex flex-column justify-content-center w-75 my-5">
                <div className="container">
                    <MenuDrawerHeader handleMenu={handleMenu} />
                    <MenuDrawerItems />
                </div>
            </div>
        </div>
    )
};