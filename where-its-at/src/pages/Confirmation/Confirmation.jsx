import { useLocation } from "react-router-dom";
import "./Confirmation.scss";

function Confirmation() {
  const eventInfo = useLocation();

  return (
    <main className="confirmation">
      {eventInfo?.state?.event ? (
        <article className="ticket">
          <section className="what">
            <p className="type">what</p>
            <h1>{eventInfo.state.event.name}</h1>
          </section>
          <section className="where">
            <p className="type">Where</p>
            <h2>{eventInfo.state.event.where}</h2>
          </section>
          <section className="when">
            <p className="type">When</p>
            <h2>{eventInfo.state.event.when.date}</h2>
          </section>
          <section className="from">
            <p className="type">From</p>
            <h2>{eventInfo.state.event.when.from}</h2>
          </section>
          <section className="to">
            <p className="type">To</p>
            <h2>{eventInfo.state.event.when.to}</h2>
          </section>
          <section className="code">
            <h1 className="barcode">ABC1132FS</h1>
            <p className="utfcode">#13123131ADAW</p>
          </section>
        </article>
      ) : (
        <article className="ticket">
          <h2 className="error-message">Ingen biljett finns att visa</h2>
        </article>
      )}
    </main>
  );
}

export default Confirmation;
