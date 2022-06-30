import './sign-in-with-btn.styles.scss';
import {
    Imdb,
    Apple,
    Facebook,
    Google,
    Amazon
} from '../../index';

const SignInWithBtn = ({ title, signInWith }) => {

    const SIGN_IN_WITH = {
        imdb: Imdb,
        apple: Apple,
        facebook: Facebook,
        google: Google,
        amazon: Amazon
    }

    return (
        <div className="signIn-with-btn d-flex justify-content-between align-items-center ps-3 pe-4 mb-3 ">
            <img src={`${SIGN_IN_WITH[signInWith]}`} alt="imdb" className="sign-in-btn-logo me-2" />
            <div className="title-container text-start w-100 ms-1">
                Sign in With {title}
            </div>
        </div>
    )
};

export default SignInWithBtn;