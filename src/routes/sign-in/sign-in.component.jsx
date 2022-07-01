import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer";
import SignInWithBtn from "../../components/footer/sign-in-with-btn/sign-in-with-btn.component";

import './sign-in.styles.scss';

const SignIn = () => {
    return (
        <div className="signIn-page d-flex justify-content-center flex-column">
            <div className="container-fluid signIn-container">
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-md-6 p-5 ">
                            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                                <h2 className="sign-in-title fw-bold mb-3">Sign In</h2>
                                <SignInWithBtn title='IMDb' signInWith='imdb' />
                                <SignInWithBtn title='Apple' signInWith='apple' />
                                <SignInWithBtn title='Amazon' signInWith='amazon' />
                                <SignInWithBtn title='Google' signInWith='google' />
                                <SignInWithBtn title='Facebook' signInWith='facebook' />

                                <Button btnType="create_account" btnText="Create a New account" />
                            </div>
                        </div>

                        <div className="col-md-6 p-5 border-start">
                            <h3 className="fw-bold" style={{color: "grey"}}>Benefits of your free IMDb account</h3>

                            <h5>Personalized Recommendations</h5>
                            <p>Discover Shows you'll love</p>

                            <h5>Your Watchlist</h5>
                            <p>Track everything you want to watch and recieve e-mail when movies open in theaters</p>

                            <h5>Your Ratings</h5>
                            <p>Rate and remember everything you've seen</p>

                            <h5>Contribute to IMDb</h5>
                            <p>Add data that will be seen by millions of people and get cool badges.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
};

export default SignIn;