import React from "react";
import "./home.styles.scss";
import Footer from "../../components/footer/footer";
const ImgCarousel = React.lazy(() => import("../../components/imgCarousel/imgCarousel.component"));
const Slider = React.lazy(() => import("../../components/slider/slider.component"));

const Home = () => {
    return (
        <div className="home">
            <div className="row g-0 justify-content-center">
                <React.Suspense fallback="Loading..." >
                    <ImgCarousel />
                    <Slider />
                </React.Suspense>
            </div>
            <Footer />
        </div>
    )
};

export default Home;