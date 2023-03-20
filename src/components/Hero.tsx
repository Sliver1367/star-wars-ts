import React from 'react';
import {friends} from "../utils/constants";

interface Props {
    hero: string
}

const Hero: React.FC<Props> = (props) => {
    return (
        <section className="float-start w-25 row m-1">
            <img src={friends[props.hero].img} alt={friends[props.hero].name} className="col-12"/>
        </section>
    );
};

export default Hero;