import { useEffect, useRef } from "react";

const AboutUs = () => {
    const aboutUsRef = useRef(null);
    const introRef = useRef(null);
    const profileRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1, // 10% of the element must be visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                    observer.unobserve(entry.target); // Stop observing after animation has played
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (aboutUsRef.current) observer.observe(aboutUsRef.current);
        if (introRef.current) observer.observe(introRef.current);
        if (profileRef.current) observer.observe(profileRef.current);
        if (teamRef.current) observer.observe(teamRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className=" px-4 md:px-8 lg:px-16 mt-10">
            {/* Hero Section */}
            <div ref={aboutUsRef} className="text-center mb-12 opacity-0">
            <h1 className="font-inter font-bold text-gray-300 text-4xl text-center pb-2">
                About Us
            </h1>
                <p className="text-blue text-md md:text-md max-w-2xl mx-auto">
                    Discover our journey, values, and the dedicated team driving our success.
                </p>
            </div>

            {/* Introduction and Profile Section */}
            <div className="container mx-auto lg:grid-cols-2 gap-12">
                {/* Text Content */}
                <div ref={introRef} className="space-y-6 opacity-0">
                    <p className="text-lightgray text-lg leading-relaxed text-justify">
                        With the passing of time and gaining of exposure, the varieties of cargos we handled increased manifold. Our services now include handling diverse cargo types, including bagged consignments, palletized items, cartons, drums, wooden cases, and more. Our equipment and techniques have evolved to meet these growing needs. We specialize in handling over-dimensional and break-bulk cargoes. Our extensive experience allows us to manage any type of cargo and volume, ensuring efficiency and reliability. Our client base includes multinational companies and corporate giants like Hetero Drugs, Siemens, and Redington India Pvt Ltd., showcasing our ability to handle complex and large-scale logistics operations. We are committed to providing exceptional service, building lasting relationships, and maintaining high standards in all our dealings.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
