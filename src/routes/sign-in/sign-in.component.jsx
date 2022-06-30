import Button from "../../components/button/button.component";
import SignInWithBtn from "../../components/sign-in-with-btn/sign-in-with-btn.component";

const SignIn = () => {
    return (
        <div className="signIn-page container-fluid">
            <div className="container bg-light">
                <div className="row">
                    <div className="col-sm-6 p-5 ">
                        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                            <h1>Sign In</h1>
                            <SignInWithBtn title='IMDb' signInWith='imdb' />
                            <SignInWithBtn title='Apple' signInWith='apple' />
                            <SignInWithBtn title='Amazon' signInWith='amazon' />
                            <SignInWithBtn title='Google' signInWith='google' />
                            <SignInWithBtn title='Facebook' signInWith='facebook' />

                            <Button btnType="create_account" btnText="Create a New account" />
                        </div>
                    </div>

                    <div className="col-sm-6 p-5 border-start">
                        <h3>Benefits of your free IMDb account</h3>

                        <h5>Personalized Recommendations</h5>
                        <span>Discover Shows you'll love</span>

                        <h5>Your Watchlist</h5>
                        <span>Track everything you want to watch and recieve e-mail when movies open in theaters</span>

                        <h5>Your Ratings</h5>
                        <span>Rate and remember everything you've seen</span>

                        <h5>Contribute to IMDb</h5>
                        <span>Add data that will be seen by millions of people and get cool badges.</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignIn;