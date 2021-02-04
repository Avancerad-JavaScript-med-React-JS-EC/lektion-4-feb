import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import staffArray from '../assets/staff.json';

function Staff() {

    return (
        <article>
            <h2>Anställda</h2>
            <nav>
                { staffArray.map((staff) => {
                    return <Link to={ `/${staff.id}` } key={ staff.id }>{ staff.name }</Link>
                })}
            </nav>
        </article>
    )
}

export default Staff;