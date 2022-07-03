import { FaPlay } from 'react-icons/fa'
import "./card.styles.scss";

const Card = ({ img, title, link }) => {

    return (
        <div className="card bg-dark text-white col-sm-3 m-2 p-0">
            <img src={img} className="card-img" alt="slider-img" loading="lazy" />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title bg-dark rounded text-center p-2">{title}</h5>
                <a href={link} className="btn btn-dark" target={"_blank"} rel="noreferrer"><FaPlay />Trailer</a>
            </div>
        </div>
    )
};

export default Card;