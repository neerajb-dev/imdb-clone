import menuDrawerLogo from '../../assets/imdb-logo-575.svg';
import closeBtn from '../../assets/close-round.svg';

export const MenuDrawerHeader = ({ handleMenu }) => {
    return (
        <div className="drawer__header d-flex justify-content-sm-between justify-content-center align-items-center p-2">
            <div className="drawer__header--logo d-none d-sm-inline">
                <img src={menuDrawerLogo} alt="logo" className="header--logo" width={"100px"} />
            </div>
            <div className="drawer__header--close-btn">
                <img src={closeBtn} alt="" className="close--btn" onClick={handleMenu} width={"40px"} />
            </div>
        </div>
    )
};