import { FaExternalLinkAlt } from 'react-icons/fa';

const FooterLinks = () => {

    const links = [
        'Get the IMDb App',
        'Help',
        'Site Index',
        'IMDbPro',
        'Box Office Mojo',
        'IMDb Developer'
    ]

    return (
        <div className="footer-links container d-flex justify-content-center align-items-center gap-5 bg-dark">
            {
                links.map((link) => {
                    return (
                        <a href="!#" className="text-light p-2" target={"_blank"}>{link}<FaExternalLinkAlt className="ms-2" size="12px" /></a>
                    )
                })
            }
        </div>
    )
}

export default FooterLinks;