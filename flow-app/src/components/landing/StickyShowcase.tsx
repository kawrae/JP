import Reveal from "../Reveal";

function StickyShowcase() {
  return (
    <section className="landing-sticky-showcase">
      <Reveal>
        <div className="landing-sticky-showcase__intro">
          <p className="landing-section-kicker">Scroll experience</p>
          <h2>Sections that feel immersive as you move down the page.</h2>
          <p>
            This area is designed with sticky positioning so the content feels more
            dynamic and premium while scrolling.
          </p>
        </div>
      </Reveal>

      <div className="landing-sticky-showcase__stack">
        <Reveal delay={0.04}>
          <article className="landing-stack-card">
            <span className="landing-stack-card__number">01</span>
            <h3>Past</h3>
            <p>
              Introduce the Clyde’s industrial prominence with atmospheric archive
              imagery and concise editorial text.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="landing-stack-card">
            <span className="landing-stack-card__number">02</span>
            <h3>Transition</h3>
            <p>
              Show the shift from heavy industry to culture, tourism, and public
              regeneration across modern Glasgow.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.16}>
          <article className="landing-stack-card">
            <span className="landing-stack-card__number">03</span>
            <h3>Present</h3>
            <p>
              Present Flow as a contemporary museum brand that connects local history
              to modern audiences.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default StickyShowcase;