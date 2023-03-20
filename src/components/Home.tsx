import React, {useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./farGalaxy/FarGalaxy";
import {characters, defaultHero} from "../utils/constants";
import {useParams} from "react-router-dom";

interface Props {
    changeHero: (hero: string) => void
}

const Home: React.FC<Props> = props => {
    let {heroId} = useParams() as { heroId: string };
    if (!characters.includes(heroId))
        heroId = defaultHero;

    useEffect(() => {
        props.changeHero(heroId);
    }, [heroId])


    return (
        <main className={'clearfix'}>
            <Hero hero={heroId}/>
            <Friends hero={heroId}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;