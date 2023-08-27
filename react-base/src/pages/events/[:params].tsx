import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { useEffect, useState } from 'react';
import path from 'path';

interface EventState {
    id: string;
}

const Event = () => {
    let location = useLocation();
    const paths: string[] = location.pathname.substring(1).split('/');
    const [id, setId] = useState(paths[1]);

    return (
        <>
            <Helmet>
                <title>Event :: {id}</title>
            </Helmet>
            <h1>Event {id}</h1>
        </>
    )
}

export default Event;