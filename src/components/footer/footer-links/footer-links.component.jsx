import { FaExternalLinkAlt } from 'react-icons/fa';

const FooterLinks = () => {

    const linkOne = [
        'Get the IMDb App',
        'Help',
        'Site Index',
        'IMDbPro',
        'Box Office Mojo',
        'IMDb Developer'
    ]

    const linkTwo = [
        'Press Room',
        'Advertising',
        'Jobs',
        'Conditions of Use',
        'Privacy Policy',
        'Interest-based Ads'
    ]

    return (
        <div className="footer-links container d-flex justify-content-center align-items-center gap-3 bg-dark flex-wrap m-2">
            {
                linkOne.map((linksOne) => {
                    return (
                        <a href="!#" className="text-light p-2" target={"_blank"}>{linksOne}<FaExternalLinkAlt className="ms-2" size="12px" /></a>
                    )
                })
            }
            {
                linkTwo.map((linksTwo) => {
                    return (
                        <a href="!#" className="text-light p-2" target={"_blank"}>{linksTwo}</a>
                    )
                })
            }
        </div>
    )
}

export default FooterLinks;