import { FaTv } from "react-icons/fa";
import { MdLocalMovies, MdStars, MdSmartDisplay } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

export const LIST_ITEMS = [
    {
        "id": 1,
        "title": "Movies",
        "logo": <MdLocalMovies color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "Release Calendar"},
            {link: "DVD & Blue-ray Releases"},
            {link: "Top 250 Movies"},
            {link: "Browse Movies by Genre"},
            {link: "Top Box Office"},
            {link: "ShowTimes & Tickets"},
            {link: "In Theaters"},
            {link: "Coming Soon"},
            {link: "Movie News"},
            {link: "India Movie Spotlight"},
        ]

    },
    {
        "id": 2,
        "title": "TV Shows",
        "logo": <FaTv color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "What's on TV & Streaming"},
            {link: "Top 250 TV Shows"},
            {link: 'Most Popular TV Shows'},
            {link: 'Browse TV Shows by Genre'},
            {link: 'TV News'},
            {link: 'India Tv Spotlight'}
        ]
    },
    {
        "id": 3,
        "title": "Awards & Events",
        "logo": <MdStars color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "Oscars"},
            {link: "Best Picture Winners"},
            {link: "Emmys"},
            {link: "LGBTQ+ Pride Month"},
            {link: "STARmeter Awards"},
            {link: "San Diego Comic-Con"},
            {link: "New York Comic-Con"},
            {link: "Sundance Film Festival"},
            {link: "Toronto Int'l Film Festival"},
            {link: "Award Central"},
            {link: "Festival Central"},
            {link: "All Events"},
        ]
    },
    {
        "id": 4,
        "title": "Watch",
        "logo": <MdSmartDisplay color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "What to Watch"},
            {link: "Latest Trailers"},
            {link: "IMDb Originals"},
            {link: "IMDb Picks"},
            {link: "IMDb Podcasts"},
        ]
    },
    {
        "id": 5,
        "title": "Celebs",
        "logo": <IoMdPeople color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "Born Today"},
            {link: "Most Popular Celebs"},
            {link: "Celebrity News"},
        ]
    },
    {
        "id": 6,
        "title": "Community",
        "logo": <BiWorld color="rgb(245,197,24)" size="24px" />,
        "links": [
            {link: "Help Center"},
            {link: "Contributor Zone"},
            {link: "Polls"},
        ]
    },
]

