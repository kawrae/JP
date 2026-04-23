import { Link } from "react-router-dom";
import Reveal from "../Reveal";

function CtaSection() {
  return (
    <section className="landing-cta">
      <Reveal>
        <div className="landing-cta__card">
          <p className="landing-section-kicker">Contact Flow</p>
          <h2>Get in touch with the museum.</h2>
          <p>
            Find enquiries, visitor details, and contact information through the
            dedicated contact page.
          </p>

          <div className="landing-cta__actions">
            <Link to="/contact" className="landing-button landing-button--primary">
              View contact page
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default CtaSection;