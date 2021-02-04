import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import staffArray from '../assets/staff.json';

function Info() {
    //Plocka ut parameter från url:en alltså det som är :id i path i app.js
    //useParams kollar i din url efter ett : och plockar ut det som finns efter den
    const param = useParams();
    const [staff, setStaff] = useState({});
    console.log(param);

    useEffect(() => {
        //Plocka ut den anställda vars id är samma som det id som är i url:en
        const employee = staffArray.filter((staffObj) => {
            return staffObj.id === parseInt(param.id);
        });

        console.log(employee);
        setStaff(employee[0]);
    }, [param])

    return (
        <article>
            <h2>Detaljer</h2>
            <h3>{ staff.name }</h3>
            <p>Mobil: { staff.phone }</p>
            <p>E-post: { staff.mail }</p>
        </article>
    )
}

export default Info;