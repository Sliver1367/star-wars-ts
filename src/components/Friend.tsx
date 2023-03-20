import React from 'react';
import {friends, homePage} from "../utils/constants";
import {useNavigate} from "react-router-dom";

interface Props {
    friend: string
    mystyle: string
}

const Friend: React.FC<Props> = (props) => {

    const navigate = useNavigate();
    return (
        <img className={`${props.mystyle} col-4 p-1`} src={friends[props.friend].img}
             alt={friends[props.friend].name}
             onClick={() => navigate(`/${homePage}/${props.friend}`)}/>
    );
};

export default Friend;