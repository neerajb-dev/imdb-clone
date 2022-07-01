import './footer-socials.styles.scss';
import { FaFacebookSquare, FaInstagramSquare, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterSocials = () => {
    return (
        <div className="footerSocials container d-flex justify-content-center align-items-center gap-4 flex-wrap p-2">

            <FaFacebookSquare size="24px" color="#fff" />

            <FaInstagramSquare size="24px" color="#fff" />

            <FaTwitch size="24px" color="#fff" />

            <FaTwitter size="24px" color="#fff" />

            <FaYoutube size="24px" color="#fff" />

        </div>
    )
};

export default FooterSocials;