import './footer-company.styles.scss';
import AmazonLogo from '.././../../assets/amazon_logo_white.png';

const FooterCompany = () => {
    return (
        <div className="footer-company d-flex justify-content-center p-2 m-2">
            <div className="made-by">
                <span className="text-light fs-6 fw-bold ">a <img src={AmazonLogo} alt="Logo" className="amazon-logo-long" /> company</span>
            </div>
        </div>
    )
};

export default FooterCompany;