import './button.styles.scss';

const Button = ({ btnType, btnText }) => {

    const BTN_TYPE = {
        create_account: 'create-account-btn',
    }

    return (
        <button className={`button btn d-flex justify-content-center align-items-center ${BTN_TYPE[btnType]}`}>{btnText}</button>
    )
};

export default Button;