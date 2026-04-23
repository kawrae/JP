import Reveal from "../Reveal";
import venueMap from "../../assets/venue-map.png";

function VenueGuide() {
  return (
    <section className="landing-venue-guide">
      <div className="landing-venue-guide__inner">
        <div className="landing-venue-guide__content">
          <Reveal delay={0.1}>
            <p className="landing-section-kicker">Navigation</p>
            <h2>Explore the venue.</h2>
            <p className="landing-venue-guide__lead">
              Our museum is designed for intuitive exploration. Use this map to
              locate exhibition galleries, facilities, and our café space.
            </p>

            <ul className="landing-venue-guide__list">
              <li>
                <strong>01 - 09:</strong> Primary exhibition zones
              </li>
              <li>
                <strong>Facilities:</strong> Accessible restrooms located near
                the entrance
              </li>
              <li>
                <strong>Café:</strong> Refreshments available in the west wing
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="landing-venue-guide__map-wrap">
            <img
              src={venueMap}
              alt="Floor plan of Flow Museum"
              className="landing-venue-guide__map"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default VenueGuide;
