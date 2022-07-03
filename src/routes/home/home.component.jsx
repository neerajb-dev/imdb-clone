import "./home.styles.scss";
import Footer from "../../components/footer/footer";
import ImgCarousel from "../../components/imgCarousel/imgCarousel.component";
import Slider from "../../components/slider/slider.component";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <ImgCarousel />
                    <Slider />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;