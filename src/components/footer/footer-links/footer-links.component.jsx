import { FaExternalLinkAlt } from 'react-icons/fa';

const FooterLinks = () => {

    const linkOne = [
        {
            id: 1,
            linkname: 'Get the IMDb App',
        },
        {
            id: 2,
            linkname: 'Help',
        },
        {
            id: 3,
            linkname: 'Site Index',
        },
        {
            id: 4,
            linkname: 'IMDbPro',
        },
        {
            id: 5,
            linkname: 'Box Office Mojo',
        },
        {
            id: 6,
            linkname: 'IMDb Developer',
        },
    ]

    const linkTwo = [
{
            id: 1,
            linkname: 'Press Room',
        },
        {
            id: 2,
            linkname: 'Advertising',
        },
        {
            id: 3,
            linkname: 'Jobs',
        },
        {
            id: 4,
            linkname: 'Conditions of Use',
        },
        {
            id: 5,
            linkname: 'Privacy Policy',
        },
        {
            id: 6,
            linkname: 'Interest-based Ads',
        },
    ]

    return (
        <div className="footer-links container d-flex justify-content-center align-items-center gap-3 bg-dark flex-wrap m-2">
            {
                linkOne.map((linksOne) => {
                    return (
                        <a href="!#" className="text-light p-2" target={"_blank"} key={linksOne.id} >{linksOne.linkname}<FaExternalLinkAlt className="ms-2" size="12px" /></a>
                    )
                })
            }
            {
                linkTwo.map((linksTwo) => {
                    return (
                        <a href="!#" className="text-light p-2" target={"_blank"} key={linksTwo.id}>{linksTwo.linkname}</a>
                    )
                })
            }
        </div>
    )
}

export default FooterLinks;