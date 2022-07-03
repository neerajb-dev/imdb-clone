import { jurasic_world, the_gray_man, thor_love } from "../../assets/carousal_img";
import "./imgCarousel.styles.scss";

const ImgCarousel = () => {
    return (
        <div className="col-md-8 p-2">
            <div id="carouselExampleControls" className="carousel slide bg-slider" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={jurasic_world} className="d-block w-100" alt="..." loading="lazy" />
                    </div>
                    <div className="carousel-item">
                        <img src={the_gray_man} className="d-block w-100" alt="..." loading="lazy" />
                    </div>
                    <div className="carousel-item">
                        <img src={thor_love} className="d-block w-100" alt="..." loading="lazy" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ImgCarousel;