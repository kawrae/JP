import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroBanner from "../../assets/hero-banner.png";

function HeroSection() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__media">
        <motion.img
          src={heroBanner}
          alt="Historic Clyde shipyard workers and cranes"
          className="landing-hero__image"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="landing-hero__overlay" />
        <div className="landing-hero__grain" />
      </div>

      <div className="landing-hero__content">
        <motion.div
          className="landing-hero__topline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="landing-pill">Flow Museum</span>
          <span className="landing-pill landing-pill--ghost">
            Glasgow / River Clyde / Heritage
          </span>
        </motion.div>

        <motion.div
          className="landing-hero__copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="landing-kicker">Contemporary museum of the Clyde</p>

          <h1 className="landing-title">
            <span className="landing-title__line">Flow Museum:</span>
            <span className="landing-title__line landing-title__line--sub">
              Glasgow history and heritage.
            </span>
          </h1>

          <p className="landing-lead">
            Flow is a contemporary museum celebrating the history of Glasgow’s
            Clyde — from shipbuilding and trade to tourism, culture, and the
            city’s ongoing transformation.
          </p>
        </motion.div>

        <motion.div
          className="landing-hero__actions landing-hero__actions--minimal"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/contact" className="landing-button landing-button--primary">
            Plan your visit
          </Link>
        </motion.div>

        <motion.div
          className="landing-hero__meta landing-hero__meta--single"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="landing-meta-card">
            <MapPin size={18} />
            <span>Explore exhibitions, visitor information, and enquiries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;