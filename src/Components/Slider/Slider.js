import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
  {
    url: "https://www.broadcastandcablesat.co.in/wp-content/uploads/2022/03/Audio-content-platform-Kuku-FM-bags-19.5-million-Series-B-funding-led-by-KRAFTON-Inc..jpg",
    link: "https://kukufm.com/",
    alt: "Kuku FM",
    title: "Kuku FM",
  },
  {
    url: "https://www.proprofschat.com/blog/wp-content/uploads/2024/01/Chat360-Alternative-1.png",
    link: "https://chat360.io/",
    alt: "Chat360",
    title: "Chat360",
  },
  {
    url: "https://tse4.mm.bing.net/th?id=OIP.yOGrXAtuNN5aRbHblc2FrQAAAA&pid=Api&P=0&h=180",
    link: "https://dacby.com/",
    alt: "Dacby Technologies",
    title: "Dacby Technologies",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560BAQEmu4vlG9BP3w/company-logo_200_200/0/1648793126601?e=2147483647&v=beta&t=oG146nnsf1JJ-PYYsuck1gnheOv-bCafATFaDt1eSn8",
    link: "http://www.nebulaa.in/",
    alt: "Nebulaa Innovations",
    title: "Nebulaa Innovations",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className="slides">
          <a
            href={images[currentIndex].link}
            alt={images[currentIndex].alt}
            className="slide"
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          ></a>
          <div className="title">{images[currentIndex].title}</div>
        </div>        
    </>
  );
};

export default Slider;
