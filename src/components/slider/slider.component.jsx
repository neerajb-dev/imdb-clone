import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import {
    gray,
    thor,
    jurassic
} from "../../assets/slider_images";

import Card from "../card/card.component";

const LazyCard = React.lazy(() => import("../card/card.component"));

const Slider = () => {

    // const [popularMovies, setPopularMovies] = useState();

    // useEffect(() => {
    //     getPopularMovies();
    // }, [])

    // const getPopularMovies = () => {

    //     const API_KEY = 'f330302bb5602503687ce4df766e48e2';
    //     const BASE_URL = 'https://api.themoviedb.org/3/';
    //     const API_URL = BASE_URL + `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    //     axios.get(API_URL)
    //         .then(res => {
    //             if (res.data) {
    //                 setPopularMovies(res.data);
    //             }
    //         })
    //         .catch()
    // }

    // const IMG_URL = `https://image.tmdb.org/t/p/w500/`

    return (

        <div className="slider overflow-x container" style={{ overflowX: "scroll" }}>
            <div className="d-flex flex-column flex-sm-row flex-nowrap">
                <Card img={gray} title='The Gray Man' link='https://www.youtube.com/watch?v=BmllggGO4pM' />
                <Card img={thor} title='Thor Love and Thunder' link='https://www.youtube.com/watch?v=S5bVvAHLUYY' />
                <Card img={jurassic} title='Jurassic World Dominion' link='https://www.youtube.com/watch?v=DtQycgMD4HQ' />
                <Card img={gray} title='The Gray Man' link='https://www.youtube.com/watch?v=BmllggGO4pM' />
                <React.Suspense fallback="loading...">
                    <LazyCard img={thor} title='Thor Love and Thunder' link='https://www.youtube.com/watch?v=S5bVvAHLUYY' />
                    <LazyCard img={jurassic} title='Jurassic World Dominion' link='https://www.youtube.com/watch?v=DtQycgMD4HQ' />
                    <LazyCard img={gray} title='The Gray Man' link='https://www.youtube.com/watch?v=BmllggGO4pM' />
                    <LazyCard img={thor} title='Thor Love and Thunder' link='https://www.youtube.com/watch?v=S5bVvAHLUYY' />
                    <LazyCard img={jurassic} title='Jurassic World Dominion' link='https://www.youtube.com/watch?v=DtQycgMD4HQ' />
                </React.Suspense>
            </div>
        </div>
    )
};

export default Slider;