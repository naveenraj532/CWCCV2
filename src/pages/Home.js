import { useEffect, useRef, useState } from "react";
// import ImageLoader from '../sections/ImageLoader';
// import MoreAboutUs from '../sections/MoreAboutUs';
// import { Services } from '../sections/Services';
import ImageSlider from "../components/ImageSlider";
import { Clients } from '../V2/Clients';
// import { Director } from '../sections/Director';
import { Hero } from "../V2/Hero";
import CWCworld from "../V2/CWCworld";
import Whatwedo from "../V2/Whatwedo";
import AboutUs from "../V2/AboutUs";
import ContactUs from "./ContactUs"

const Home = () => {
    const [fadeInSections, setFadeInSections] = useState({
        imageLoader: false,
        moreAboutUs: false,
        services: false,
        blog: false,
        clients: false,
        director: false,
    });

    const sectionRefs = useRef({
        imageLoader: null,
        moreAboutUs: null,
        services: null,
        blog: null,
        clients: null,
        director: null,
    });

    useEffect(() => {
        const handleScroll = () => {
            const sectionEntries = Object.entries(sectionRefs.current).map(([key, ref]) => ({
                key,
                isVisible: ref && ref.getBoundingClientRect().top < window.innerHeight,
            }));
            
            const newFadeInSections = sectionEntries.reduce((acc, { key, isVisible }) => {
                acc[key] = isVisible;
                return acc;
            }, {});

            setFadeInSections(newFadeInSections);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="bg-lightblack block">
            <section id="hero"
                ref={el => (sectionRefs.current.imageLoader = el)}
                className={`xl:padding-1 wide:padding-r scroll-mt-24 padding-b ${fadeInSections.imageLoader ? "animate-fadeInUp" : ""}`}
            >
                <Hero />
            </section>
            <section id="hero"
                ref={el => (sectionRefs.current.moreAboutUs = el)}
                className={` max-sm:px-4 xl:padding-0 wide:padding-r scroll-mt-24 ${fadeInSections.moreAboutUs ? "animate-fadeInUp" : ""}`}
            >
                <CWCworld />
            </section>
            <section id="services"
                ref={el => (sectionRefs.current.services = el)}
                className={`max-sm:px-4 xl:padding-0 wide:padding-r scroll-mt-24 padding-b ${fadeInSections.services ? "animate-fadeInUp" : ""}`}
            >
                <Whatwedo />
            </section>
            <section id="clients"
                ref={el => (sectionRefs.current.clients = el)}
                className={`max-sm:px-4 xl:padding-0 wide:padding-r padding-b scroll-mt-24 ${fadeInSections.clients ? "animate-fadeInUp" : ""}`}
            >
                <Clients />
            </section>
            <section id="about-us"
                ref={el => (sectionRefs.current.director = el)}
                className={`max-sm:px-4 xl:padding-0 wide:padding-r padding-b scroll-mt-24 ${fadeInSections.director ? "animate-fadeInUp" : ""}`}
            >
                <AboutUs />
            </section> 

            <section id="contact-us"
                ref={el => (sectionRefs.current.director = el)}
                className={`max-sm:px-4 xl:padding-0 wide:padding-r padding-b scroll-mt-24 ${fadeInSections.director ? "animate-fadeInUp" : ""}`}
            >
                <ContactUs />
            </section> 
            <section
                ref={el => (sectionRefs.current.blog = el)}
                className={`max-sm:px-4 xl:padding-0 wide:padding-r padding-b scroll-mt-24 ${fadeInSections.blog ? "animate-fadeInUp" : ""}`}
            >
                <ImageSlider />
            </section>
        </main>
    );
};

export default Home;
