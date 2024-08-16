import { useEffect, useRef } from "react";
import suresh from "../assets/images/sureshsingh.png";
import team from "../assets/images/team.png";

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
        <div className="bg-gray-100 px-4 py-12 md:px-8 lg:px-16 mt-10">
            {/* Hero Section */}
            <div ref={aboutUsRef} className="text-center mb-12 opacity-0">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r text-forest-green ">
                    About Us
                </h1>
                <p className="text-charcoal text-lg md:text-xl max-w-2xl mx-auto">
                    Discover our journey, values, and the dedicated team driving our success.
                </p>
            </div>

            {/* Introduction and Profile Section */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Text Content */}
                <div ref={introRef} className="space-y-6 opacity-0">
                    <h2 className="text-charcoal text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-charcoal text-lg leading-relaxed">
                        With the passing of time and gaining of exposure, the varieties of cargos we handled increased manifold. Our services now include handling diverse cargo types, including bagged consignments, palletized items, cartons, drums, wooden cases, and more. Our equipment and techniques have evolved to meet these growing needs.
                    </p>
                    <p className="text-charcoal text-lg leading-relaxed">
                        We specialize in handling over-dimensional and break-bulk cargoes. Our extensive experience allows us to manage any type of cargo and volume, ensuring efficiency and reliability.
                    </p>
                    <p className="text-charcoal text-lg leading-relaxed">
                        Our client base includes multinational companies and corporate giants like Hetero Drugs, Siemens, and Redington India Pvt Ltd., showcasing our ability to handle complex and large-scale logistics operations.
                    </p>
                    <p className="text-charcoal text-lg leading-relaxed">
                        We are committed to providing exceptional service, building lasting relationships, and maintaining high standards in all our dealings.
                    </p>
                </div>

                {/* Image and Profile */}
                <div ref={profileRef} className="flex flex-col items-center bg-forest-green p-6 rounded-lg relative overflow-hidden text-center opacity-0">
                    <img className="w-full h-full rounded-lg border-light-gray mb-4" src={suresh} alt="Suresh Singh" />
                    <div className="text-light-gray">
                        <p className="text-lg text-justify leading-relaxed mb-4">
                            With 25 years of experience in logistics, particularly with custom bonded warehouses, Suresh Singh is an expert in managing import cargoes and related customs regulations. His dedication and expertise ensure high-quality service and lasting relationships.
                        </p>
                        <p className="text-xl font-semibold mb-1">S. Suresh Singh</p>
                        <p className="text-lg font-medium mb-1">Director</p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div ref={teamRef} className="bg-white py-12 mt-12 opacity-0">
                <h2 className="text-center text-forest-green text-3xl font-bold mb-6">Our Team</h2>
                <div className="relative">
                    <img className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg" src={team} alt="Team" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
