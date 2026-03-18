import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import logoImg from "./assets/Logo Final No Text.png";
import rentedImg from "./assets/rented-space.png";
import workshopImg from "./assets/workshops.png";
import printImg from "./assets/print-studio.png";

const cards = [
  {
    title: "Rented Spaces",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo neque quam, non lacinia augue fringilla at. In non urna scelerisque, ornare purus ac, tristique risus. Pellentesque fermentum eget nisl at ullamcorper.",
    image: rentedImg,
    imagePosition: "45% 55%",
  },
  {
    title: "Workshops",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo neque quam, non lacinia augue fringilla at. In non urna scelerisque, ornare purus ac, tristique risus. Pellentesque fermentum eget nisl at ullamcorper.",
    image: workshopImg,
    imagePosition: "45% 55%",
  },
  {
    title: "Print Studios",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo neque quam, non lacinia augue fringilla at. In non urna scelerisque, ornare purus ac, tristique risus. Pellentesque fermentum eget nisl at ullamcorper.",
    image: printImg,
    imagePosition: "45% 55%",
  },
];

function Navbar() {
  return (
    <header className="">
      <nav className="mx-auto flex w-full max-w-[1900px] items-center justify-between rounded-[3.5rem] border-[4px] border-white bg-[#181818] px-5 py-3 md:px-8 md:py-4 lg:px-10 lg:mb-10">
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="ARC logo"
            className="h-14 w-auto object-contain md:h-16"
          />
        </div>

        <div className="hidden items-center gap-8 text-[1.05rem] font-semibold uppercase leading-none text-white md:flex lg:gap-14 lg:text-[2rem]">
          <a href="#" className="transition hover:text-[#df6fe3]">
            WHATS ON
          </a>
          <a href="#" className="transition hover:text-[#6fe39b]">
            EXHIBITIONS
          </a>
          <a href="#" className="text-[#ec7b4c]">
            SPACES
          </a>
          <a href="#" className="transition hover:text-[#6fb8e3]">
            ABOUT US
          </a>
        </div>

        <button
          aria-label="More"
          className="text-white transition hover:text-[#ec7b4c]"
        >
          <MoreHorizontal size={55} strokeWidth={3} />
        </button>
      </nav>
    </header>
  );
}

function SpacePanel({ title, text, image, imagePosition, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="flex justify-center"
    >
      <div className="relative w-[360px] pt-[180px] md:w-[400px] md:pt-[200px] lg:w-[440px] lg:pt-[200px]">
        <div className="min-h-[500px] bg-[#fff] px-8 pb-12 pt-[220px] text-center md:min-h-[545px] md:px-9 md:pt-[242px] lg:min-h-[610px] lg:px-10 lg:pt-[266px]">
          <h3 className="mb-5 text-[2.2rem] font-black leading-[0.88] tracking-[-0.06em] text-[#111] md:text-[2.55rem] lg:text-[2.8rem]">
            {title}
          </h3>

          {/* text */}
          <p className="mx-auto max-w-[300px] text-[1.55rem] leading-[1.08] tracking-[-0.02em] text-[#1f1f1f] md:max-w-[320px] md:text-[1.55rem] lg:max-w-[340px] lg:text-[1.55rem]">
            {text}
          </p>
        </div>

        {/* image */}
        <div className="absolute left-1/2 top-0 z-10 h-[360px] w-[360px] -translate-x-1/2 overflow-hidden rounded-full border-[8px] border-white bg-white md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px]">
          <img
            src={image}
            alt={title}
            className="block h-full w-full rounded-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#ea7b4a]">
      <Navbar />

      <main className="mx-auto w-full max-w-[1660px] px-5 pb-0 pt-5 md:px-8 md:pt-6">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center text-[5.6rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#111] md:mb-10 md:text-[8.8rem] lg:text-[15rem]"
        >
          SPACES
        </motion.h1>

        <section className="grid grid-cols-1 justify-items-center gap-y-16 md:gap-y-20 lg:grid-cols-3 lg:items-end lg:gap-x-10 lg:gap-y-0">
          {cards.map((card, index) => (
            <SpacePanel key={card.title} {...card} delay={index * 0.08} />
          ))}
        </section>
      </main>
    </div>
  );
}