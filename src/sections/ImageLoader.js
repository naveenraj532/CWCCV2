import React, { useState, useEffect } from 'react';
import tuck from "../assets/images/tuck.png";
import ship from "../assets/images/ship.jpg";
import flight from "../assets/images/flight.jpg";



const images = [
  {
    src: tuck,
    title: ["UNBEATABLE", "TRUCKING AND", "TRANSPORT", "SERVICES"],
    description: [
      "Starting from loading to unloading and maintaining the",
      "highest standards in terms of safety while in transit,",
      "we take nothing to chance."
    ],
    titleStyle: "xl:px-16 py-48",
    descriptionStyle: "xl:px-16 py-32"
  },
  {
    src: flight,
    title: ["GROUND OR AIR,", "THERE IS NO", "STOPPING", "FOR US"],
    description: [
      "From ground transportation to air freight, we ensure",
      "timely delivery without compromising on safety",
      "and efficiency."
    ],
    titleStyle: "xl:px-16 py-48",
    descriptionStyle: "xl:px-16 py-32"
  },
  {
    src: ship,
    title: ["GROUND OR WATER,", "THERE IS NO", "STOPPING", "FOR US"],
    description: [
      "Our sea freight services offer reliable shipping solutions",
      "to ensure your cargo reaches its destination",
      "on time and in perfect condition."
    ],
    titleStyle: "xl:px-16 py-48",
    descriptionStyle: "xl:px-16 py-32"
  }
];

const ImageLoader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-auto shadow-lg"> {/* Ensure the container is relative */}
      <img src={currentImage.src} alt="slideshow" className="w-full h-full object-cover object-top mt-16" style={{ height: '92vh' }} />
      <h1 className={`text-lightgray absolute inset-0 ${currentImage.titleStyle} flex items-end justify-start text-left font-montserrat font-extrabold text-5xl md:text-5xl z-10`}>
        {currentImage.title.map((line, index) => (
          <React.Fragment key={index}>{line}<br /></React.Fragment>
        ))}
      </h1>
      <p className={`text-lightgray absolute inset-0 ${currentImage.descriptionStyle} flex items-end justify-start text-left font-montserrat font-normal text-xs md:text-lg z-10`}>
        {currentImage.description.map((line, index) => (
          <React.Fragment key={index}>{line}<br /></React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default ImageLoader;
