import { useLocation, useNavigate } from "react-router-dom";
import "./Buy.scss";

function Buy() {
  const eventInfo = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/confirmation", { state: { event: eventInfo.state.event } });
  }

  return (
    <main className="pay">
      <section className="content">
        <p>You are about to score some sweet tickets to</p>
        <h1>{eventInfo.state.event.name}</h1>
        <p className="when">
          {eventInfo.state.event.when.date} {eventInfo.state.event.when.from} -{" "}
          {eventInfo.state.event.when.to}
        </p>
        <p className="where">@ Globen</p>
        <section className="counter">
          <article className="price">{eventInfo.state.event.price} sek</article>
        </section>
        <button className="btn" onClick={handleClick}>
          Take my money!
        </button>
      </section>
    </main>
  );
}

export default Buy;
