import { use, useEffect, useState } from "react";
import { EventDegree, EventGroup, EventItem } from "./interface";
import axios from "axios";

// const res = await fetch('http://localhost:3000/api/events');
export default function Events({ data }) {
    const [eventDegree, setEventDegree] = useState<EventDegree[]>([]);
    const [eventGroup, setEventGroup] = useState<EventGroup[]>([]);
    const [eventItem, setEventItem] = useState<EventItem[]>([]);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/api/events');
            const data = response.data;
            
            setEventDegree(() => data.cha[0]);
            setEventGroup(data.cha[0].groups);
            setEventItem(data.cha[0].groups[0].items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(data);

    // const data = await getData();
    // console.log(data);


    return (
        <div className="wrapper-events">
            <ul>
                {eventGroup && eventGroup.map((group: EventGroup) =>
                    <li key={group.id}>{group.groupName}</li>
                )}
            </ul>
        </div>
    )
}
