import FooterSocials from "./footer-socials/footer-socials.component";
import FooterLinks from "./footer-links/footer-links.component";
import './footer.styles.scss';
import FooterCompany from "./footer-company/footer-company.component";


const Footer = () => {
    return (
        <div className="footer container-fluid bg-dark d-flex justify-content-center align-items-center flex-column p-4 p-sm-0">
            <FooterSocials />
            <FooterLinks />
            <FooterCompany />
        </div>
    )
};

export default Footer;