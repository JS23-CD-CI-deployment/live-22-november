import { useEffect, useState } from 'react';
import './Events.scss';

import Event from '../../components/Event/Event';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events'
      );
      const data = await response.json();
      setEvents(data);
    }

    getEvents();
  }, []);

  const eventComponents = events.map((event) => {
    return <Event event={event} key={event.name} />;
  });

  return (
    <main className='events'>
      <header>
        <h1>Events</h1>
        <input type='text' name='search' placeholder='filter' />
      </header>
      <section className='content'>{eventComponents}</section>
    </main>
  );
}

export default Events;
