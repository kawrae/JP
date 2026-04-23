import { Menu } from "lucide-react";
import logo from "../assets/simple-logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#dfe3d7]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Flow home">
          <img
            src={logo}
            alt="Flow Museum logo"
            className="h-14 w-14 object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/visit" className="nav-link">
            Visit Us
          </a>
          <a href="/whats-on" className="nav-link">
            What’s on
          </a>
          <a href="/contact" className="nav-link text-[#e42226]">
            Enquiries
          </a>
          <a href="/about" className="nav-link">
            About us
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-black/5"
        >
          <Menu className="h-8 w-8" strokeWidth={3} />
        </button>
      </nav>
    </header>
  );
}