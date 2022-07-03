import { FaPlay } from 'react-icons/fa'
import "./card.styles.scss";

const Card = ({ img, title, link }) => {

    return (
        <div className="card bg-dark text-white col-3 m-2 p-0" >
            <img src={img} className="card-img" alt="slider-img" loading="lazy"/>
            <div className="card-body d-flex flex-column justify-content-center p-0">
                <span className="card-title rounded text-center d-none d-md-inline-block">{title}</span>
                <a href={link} className="btn btn-dark trailer-btn" target={"_blank"} rel="noreferrer"><FaPlay /><span className='d-none d-sm-inline-block ms-2'>Trailer</span></a>
            </div>
        </div>
    )
};

export default Card;