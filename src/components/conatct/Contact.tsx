import React, {useEffect, useState} from 'react';
import {base_url, periodMonth} from "../../utils/constants";

interface Planet {
    name: string
}

const Contact = () => {
    const [planetsArray, setPlanets] = useState(['WAIT...']);
    const fillPlanets = (url: string) => {
        fetch(url)
            .then(response => response.json())
            .then((data: Planet[]) => data.map(obj => obj.name))
            .then((planetsArray: string[]) => {
                setPlanets(planetsArray);
                let info = {
                    listPlanets: planetsArray,
                    time: Date.now()
                }
                localStorage.setItem('planets', JSON.stringify(info))
            })
    }

    useEffect(() => {
        let planets = JSON.parse(localStorage.getItem('planets')!);
        if (!planets || (Date.now() - planets.time) > periodMonth)
            fillPlanets(`${base_url}/v1/planets`)
        else
            setPlanets(planets.listPlanets)

    }, [])

    return (
        <div className="stile.container">
            <form action="action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planetsArray.map((item, index) =>
                        <option value={item} key={index}>{item}</option>)}
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Contact;