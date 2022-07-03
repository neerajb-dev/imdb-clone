import './button.styles.scss';

const Button = ({ btnType, btnText, onClick, Icon }) => {

    const BTN_TYPE = {
        create_account: 'create-account-btn',
        nav_menu_btn: 'nav-menu-btn btn-dark',
        sign_in_btn: 'sign-in-btn btn-dark'
    }

    return (
        <button className={`button btn d-flex justify-content-center align-items-center ${BTN_TYPE[btnType]}`} onClick={onClick}>{Icon}{btnText}</button>
    )
};

export default Button;