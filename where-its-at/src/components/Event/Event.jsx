import { useNavigate } from 'react-router-dom';
import './Event.scss';

function Event(props) {
  const { event } = props;
  const navigate = useNavigate();

  function handleClick() {
    navigate('/event', { state: { event: event } });
  }

  return (
    <article className='event' onClick={handleClick}>
      <aside className='date'>{event.when.date}</aside>
      <section className='info'>
        <h2>{event.name}</h2>
        <p className='where'>{event.where.venue}</p>
        <footer>
          <section className='time'>
            {event.when.from} - {event.when.to}
          </section>
          <section className='price'> {event.price} sek</section>
        </footer>
      </section>
    </article>
  );
}

export default Event;
