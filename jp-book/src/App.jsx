import HTMLFlipBook from "react-pageflip";

const pages = [
  "/pages/page-01.jpg",
  "/pages/page-02.jpg",
  "/pages/page-03.jpg",
  "/pages/page-04.jpg",
];

function Page({ image, number }) {
  return (
    <div className="page">
      <img src={image} alt={`Sketchbook page ${number}`} className="page-image" />
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1 className="title">jp-book</h1>

      <HTMLFlipBook
        width={450}
        height={600}
        size="stretch"
        minWidth={280}
        maxWidth={700}
        minHeight={350}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
      >
        {pages.map((image, index) => (
          <Page key={image} image={image} number={index + 1} />
        ))}
      </HTMLFlipBook>
    </div>
  );
}