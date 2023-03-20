import React from 'react';
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import AboutMe from "./farGalaxy/AboutMe";
import StarWars from "./farGalaxy/StarWars";
import Contact from "./conatct/Contact";
import ErrorPage from "./ErrorPage";

interface Props {
    changeHero: (hero: string) => void
}

const Main: React.FC<Props> = (props) => {
    return (
        <Routes>
            {['/', homePage, '/:heroId', `/${homePage}/:heroId`].map(path =>
                <Route path={path} key={path} element={<Home changeHero={props.changeHero}/>}/>)}
            {[aboutMePage, `${aboutMePage}/:heroId`].map(path =>
                <Route path={path} key={path} element={<AboutMe changeHero={props.changeHero}/>}/>)}

            <Route path={starWarsPage} element={<StarWars/>}/>
            <Route path={contactPage} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>


        </Routes>

    );
};


export default Main;