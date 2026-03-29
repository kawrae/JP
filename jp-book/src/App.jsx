import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./index.css";

const pages = [
  "/pages/cover-front.jpg",
  "/pages/page-01.png",
  "/pages/page-02.png",
  "/pages/page-03.png",
  "/pages/page-04.png",
  "/pages/page-05.png",
  "/pages/page-06.png",
  "/pages/page-07.png",
  "/pages/page-08.png",
  "/pages/page-09.png",
  "/pages/page-10.png",
  "/pages/page-11.png",
  "/pages/page-12.png",
  "/pages/page-13.png",
  "/pages/page-14.png",
  "/pages/page-15.png",
  "/pages/page-16.png",
  "/pages/page-17.png",
  "/pages/page-18.png",
  "/pages/page-19.png",
  "/pages/page-20.png",
  "/pages/page-21.png",
  "/pages/page-22.png",
  "/pages/page-23.png",
  "/pages/page-24.png",
  "/pages/page-25.png",
  "/pages/page-26.png",
  "/pages/page-27.png",
  "/pages/page-28.png",
  "/pages/page-29.png",
  "/pages/page-30.png",
  "/pages/page-31.png",
  "/pages/page-32.png",
  "/pages/page-33.png",
  "/pages/page-34.png",
  "/pages/page-35.png",
  "/pages/page-36.png",
  "/pages/cover-back.jpg",
];

const Page = forwardRef(({ image, number }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <img src={image} alt={`Sketchbook page ${number}`} className="page-image" />
      </div>
    </div>
  );
});

Page.displayName = "Page";

export default function App() {
  return (
    <main className="app">
      <div className="book-shell">
        <HTMLFlipBook
          width={380}
          height={540}
          minWidth={260}
          maxWidth={500}
          minHeight={360}
          maxHeight={700}
          size="stretch"
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startPage={0}
          autoSize={true}
          maxShadowOpacity={0.35}
          showCover={true}
          mobileScrollSupport={false}
          clickEventForward={true}
          className="flipbook"
        >
          {pages.map((image, index) => (
            <Page key={image} image={image} number={index + 1} />
          ))}
        </HTMLFlipBook>
      </div>
    </main>
  );
}