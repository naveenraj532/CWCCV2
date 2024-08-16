import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../assets/images/image1.jpg'; 
import image2 from '../assets/images/image2.jpg'; 
import image3 from '../assets/images/image3.jpg'; 
import image4 from '../assets/images/image4.jpg'; 
import image5 from '../assets/images/image5.jpg'; 
import image6 from '../assets/images/image6.jpg'; 
import image7 from '../assets/images/image7.jpg'; 
import image8 from '../assets/images/image8.jpg'; 

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
      <div className="relative w-full h-full max-w-4xl">
        {/* Feathered Background Frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 rounded-xl"></div>
        
        {/* Image with Feathered Shadow */}
        <div
          className="relative w-full h-full bg-cover bg-center rounded-xl shadow-lg"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          {/* Feathered Effect */}
          <div className="absolute inset-0 rounded-xl bg-black bg-opacity-40"></div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
