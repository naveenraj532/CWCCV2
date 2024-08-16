import { useEffect, useRef, useState } from "react";
// import ImageLoader from '../sections/ImageLoader';
// import MoreAboutUs from '../sections/MoreAboutUs';
// import { Services } from '../sections/Services';
import ImageSlider from "../components/ImageSlider";
import { Clients } from '../sections/Clients';
import { Director } from '../sections/Director';
import { Hero } from "../V2/Hero";
import CWCworld from "../V2/CWCworld";
import Whatwedo from "../V2/Whatwedo";
import AboutUs from "./AboutUs";
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
        <main className="bg-lightblack">
            <section
                ref={el => (sectionRefs.current.imageLoader = el)}
                className={`xl:padding-1 wide:padding-r padding-b ${fadeInSections.imageLoader ? "animate-fadeInUp" : ""}`}
            >
                <Hero />
            </section>
            <section
                ref={el => (sectionRefs.current.moreAboutUs = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.moreAboutUs ? "animate-fadeInUp" : ""}`}
            >
                <CWCworld />
            </section>
            <section
                ref={el => (sectionRefs.current.services = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.services ? "animate-fadeInUp" : ""}`}
            >
                <Whatwedo />
            </section>
            <section
                ref={el => (sectionRefs.current.clients = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.clients ? "animate-fadeInUp" : ""}`}
            >
                <Clients />
            </section>
            <section
                ref={el => (sectionRefs.current.director = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.director ? "animate-fadeInUp" : ""}`}
            >
                <AboutUs />
            </section> 
            <section
                ref={el => (sectionRefs.current.director = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.director ? "animate-fadeInUp" : ""}`}
            >
                <Director />
            </section> 

            <section
                ref={el => (sectionRefs.current.director = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.director ? "animate-fadeInUp" : ""}`}
            >
                <ContactUs />
            </section> 
            <section
                ref={el => (sectionRefs.current.blog = el)}
                className={`xl:padding-0 wide:padding-r padding-b ${fadeInSections.blog ? "animate-fadeInUp" : ""}`}
            >
                <ImageSlider />
            </section>
        </main>
    );
};

export default Home;
