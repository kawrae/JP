import Reveal from "../components/Reveal";
import "../styles/contact.css";
import { Link } from "react-router-dom";

import logo from "../assets/simple-logo.png";
import finnieston from "../assets/f-cran.jpg";
import govan from "../assets/govan-dock.jpg";
import secc from "../assets/secc.jpg";
import shipyard from "../assets/shipyard.jpg";

const cards = [
  {
    title: "The Finnieston Crane",
    image: finnieston,
    tag: "Industrial Heritage",
    text: [
      "The Finnieston Crane is one of Glasgow’s most recognisable landmarks, standing as a reminder of the Clyde’s shipbuilding and engineering past.",
      "Built between 1928 and 1931, it was designed to lift up to 175 tons of heavy machinery along the river.",
    ],
  },
  {
    title: "The Govan Shipyard",
    image: govan,
    tag: "Shipbuilding",
    text: [
      "Govan remains a significant shipbuilding location on the Clyde, with a legacy connected to Glasgow’s industrial growth.",
      "The site reflects the city’s long relationship with maritime engineering and naval construction.",
    ],
  },
  {
    title: "The SECC",
    image: secc,
    tag: "Modern Glasgow",
    text: [
      "The Scottish Event Campus is one of Glasgow’s most recognisable riverside landmarks, hosting concerts, exhibitions and major cultural events.",
      "Its striking architecture reflects the city’s shift from industrial heritage to modern innovation and tourism.",
    ],
  },
  {
    title: "The Clyde River",
    image: shipyard,
    tag: "The Clyde",
    text: [
      "The River Clyde shaped Glasgow’s identity, powering shipbuilding, engineering and global trade throughout the 19th and 20th centuries.",
      "Today, its banks blend historic shipyards with new cultural, residential and leisure developments.",
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <nav className="contact-nav">
        <Link to="/" className="contact-nav__brand">
          <img src={logo} alt="Flow Museum Logo" />
          <span>Flow Museum</span>
        </Link>

        <ul className="contact-nav__links">
          <li>Visit Us</li>
          <li>What’s On</li>
          <li>Enquiries</li>
          <li>About Us</li>
        </ul>
      </nav>

      <section className="contact-hero">
        <div className="contact-hero__inner">
          <Reveal>
            <p className="contact-eyebrow">Glasgow / River Clyde / Museum</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1>
              Discover the story of Glasgow through the river that shaped it.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="contact-hero__text">
              Flow is a contemporary museum celebrating the history of Glasgow’s
              Clyde river, from shipyards and tobacco trading to tourism,
              regeneration and cultural memory.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="contact-hero__actions">
              <a href="mailto:enquiries@flow.co.uk" className="contact-button">
                Get in touch
              </a>
              <span>Come and celebrate Glasgow Clyde with us.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-content">
        <Reveal>
          <div className="section-heading">
            <p>Explore the Clyde</p>
            <h2>Key places, stories and connections</h2>
          </div>
        </Reveal>

        <div className="contact-grid">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              className="contact-card"
              delay={index * 0.08}
            >
              <div className="contact-card__image-wrap">
                <img src={card.image} alt={card.title} />
                <span>{card.tag}</span>
              </div>

              <div className="contact-card__body">
                <h3>{card.title}</h3>
                {card.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
