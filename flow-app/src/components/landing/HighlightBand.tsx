import { Clock3, MapPin, CircleHelp } from "lucide-react";
import Reveal from "../Reveal";

function HighlightBand() {
  return (
    <section className="landing-highlight-band">
      <div className="landing-highlight-band__inner">
        <Reveal>
          <div>
            <p className="landing-section-kicker">Visitor information</p>
            <h2>Everything you need before visiting Flow.</h2>
          </div>
        </Reveal>

        <div className="landing-highlight-band__points">
          <Reveal delay={0.06}>
            <div className="landing-mini-feature">
              <Clock3 size={18} />
              <span>Opening times and visit planning</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="landing-mini-feature">
              <MapPin size={18} />
              <span>Wayfinding and venue information</span>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="landing-mini-feature">
              <CircleHelp size={18} />
              <span>Public enquiries and accessibility guidance</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HighlightBand;