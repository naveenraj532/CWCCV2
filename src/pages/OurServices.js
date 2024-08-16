import { useState, useEffect, useRef } from "react";
import { FaWarehouse, FaTruck, FaBoxes } from "react-icons/fa"; // Importing icons
import warehousing from '../assets/images/warehousing.jpg';

const OurServices = () => {
    const [fadeIn, setFadeIn] = useState(false);

    const sectionRefs = useRef({
        warehousing: null,
        storage: null,
        services: null,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setFadeIn(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

        Object.values(sectionRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`mt-32 pb-16 ${fadeIn ? "animate-fadeInUp" : ""}`}>
            <h1 className="px-16 text-navy font-montserrat font-extrabold text-4xl mb-10 text-center">Services.</h1>

            {/* Warehousing Section */}
            <div ref={el => (sectionRefs.current.warehousing = el)} className="flex items-center mb-16">
                <div className="w-1/2 px-16">
                    <h2 className="text-blue font-montserrat font-bold text-xl flex items-center">
                        <FaWarehouse className="mr-2" /> 1) Warehousing
                    </h2>
                    <p className="text-charcoal mt-4 text-justify">
                        Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team has years of experience in this business and can handle long-term and large-scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing, and distribution services requirements, and allow us to make a positive difference in your business.
                        <br /><br />
                        Moreover, our supply chain management experts would design a logistic process especially for you to align with your business in an integrated fashion. Our warehousing services include a wide range of services that include inventory control and management, load building, yard management, static and dynamic replenishment, kitting, order processing, vendor performance, cross-docking, supply chain management, logistic integration, barcoding, quality control, labeling, carrier performance, and so on.
                    </p>
                </div>
                <div className="w-1/2 relative">
                    <div className="flex flex-col gap-12 items-end">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`bg-blue h-16 w-[605px]`}></div>
                        ))}
                    </div>
                    <div className="px-16">
                        <img className="mt-0 top-[50%] left-11 absolute transform -translate-y-1/2 h-96" src={warehousing} alt="Warehousing" />
                    </div>
                </div>
            </div>

            {/* Storage Section */}
            <div ref={el => (sectionRefs.current.storage = el)} className="flex items-center mb-16">
                <div className="w-1/2 relative">
                    <div className="flex flex-col gap-12 items-start">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`bg-forest-green h-16 w-[605px]`}></div>
                        ))}
                    </div>
                    <div className="px-16">
                        <img className="mt-0 left-[65px] top-[50%] absolute transform -translate-y-1/2 h-96" src={warehousing} alt="Storage" />
                    </div>
                </div>
                <div className="w-1/2 px-16">
                    <h2 className="text-forest-green font-montserrat font-bold text-xl flex items-center">
                        <FaBoxes className="mr-2" /> 2) Storage
                    </h2>
                    <p className="text-charcoal mt-4 text-justify">
                        We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which are comprehensive, reliable, and flexible – qualities that are essential to help businesses in this market. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, which focuses on not only increasing efficiency but cutting down costs. With our vast network of warehouses and distribution centers spread throughout the country, it becomes much easier to cater to an audience in a record response time, which is the key factor in winning the hearts of the customer and having an edge over the competitors.
                        <br /><br />
                        A team of logistic experts is always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your budget but would also save you a considerable amount of money in the long term. Our company has, through years of experience in this industry, been able to create a network of associates across the length and breadth of the country, with our own logistic centers spread throughout the country, which helps us to provide safe, reliable, economical, and customized logistic solutions to our clients and partners.
                    </p>
                </div>
            </div>

            {/* 3PL Services Section */}
            <div ref={el => (sectionRefs.current.services = el)} className="flex items-center">
                <div className="w-1/2 px-16">
                    <h2 className="text-charcoal font-montserrat font-bold text-xl flex items-center">
                        <FaTruck className="mr-2" /> 3) 3PL Services
                    </h2>
                    <p className="text-charcoal mt-4 text-justify">
                        Ground transport and freight forwarding services, along with other ancillary services, help us to provide tailor-made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, and delivery time, while focusing on end-user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation. Our logistic and freight forwarding services, along with other ancillary services, help us to provide tailor-made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, and delivery time, while focusing on end-user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation.
                        <br /><br />
                        We ensure that our fleet of trucks is always well-maintained, and we have the best and the most updated fleet of trucks in service to ensure that it is capable of delivering high-value and oversized deliverables, efficiently and effectively, without causing any kind of loss, which is generally the case seen with many outsourced trucking service providers.
                    </p>
                </div>
                <div className="w-1/2 relative">
                    <div className="flex flex-col gap-12 items-end">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`bg-charcoal h-16 w-[605px]`}></div>
                        ))}
                    </div>
                    <div className="px-16">
                        <img className="mt-0 top-[50%] left-11 absolute transform -translate-y-1/2 h-96" src={warehousing} alt="3PL Services" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
