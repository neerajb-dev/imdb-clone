import FooterSocials from "../footer-socials/footer-socials.component";
import FooterLinks from "../footer-links/footer-links.component";
const Footer = () => {
    return (
        <div className="footer container-fluid bg-dark">
            <FooterSocials />
            <FooterLinks />
        </div>
    )
};

export default Footer;