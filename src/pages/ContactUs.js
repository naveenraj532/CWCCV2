import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaUser, FaTag, FaPhone, FaComment, FaIdBadge } from 'react-icons/fa';

const ContactUs = () => {
    const contactUsRef = useRef(null);
    const formRef = useRef(null);
    const warehouseRefs = useRef([]);
    
    const [result, setResult] = useState("");


    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (contactUsRef.current) observer.observe(contactUsRef.current);
        if (formRef.current) observer.observe(formRef.current);
        warehouseRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        
        formData.append("access_key", "f8a9e3e8-f228-410d-b4ce-eddec9d9cad2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("Failed to send email");
        }
    };

    return (
        <div className="flex flex-col mt-10 items-center justify-center min-h-screen">
            <h1 className="font-inter font-bold text-gray-300 text-4xl text-center pb-9">
                Get in touch
            </h1>
            <div className="flex flex-col gap-10 md:flex-col items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
                <form ref={formRef} onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out opacity-0 w-full md:w-4/5">
                    <h2 className="text-3xl font-bold text-center mb-6">Send an Email</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="First Name" name="FirstName" icon={<FaUser />} />
                            <InputField label="Last Name" name="LastName" icon={<FaUser />} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="E-mail Address" name="Email" type="email" icon={<FaEnvelope />} />
                            <InputField label="Phone Number" name="PhoneNumber" type="tel" icon={<FaPhone />} />
                        </div>
                        <InputField label="Subject" name="Subject" icon={<FaTag />} />
                        <TextAreaField label="Message" name="Message" icon={<FaComment />} />
                    </div>
                    <div className="text-center mt-6">
                        <button className="mt-4 px-4 py-2 text-lightblack border-2 rounded-full border-blue border-solid hover:bg-blue">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-4">{result}</p>
                </form>

                <div className="flex max-lg:flex-wrap flex-1/2 max-md:flex-col max-sm:flex-col">
                    <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:overflow-x-auto lg:gap-6">
                        {warehouses.map((warehouse, index) => (
                            <div ref={el => (warehouseRefs.current[index] = el)} key={index} className="opacity-0">
                                <WarehouseCard {...warehouse} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, name, type = "text", icon }) => (
    <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-forest-green focus-within:outline-none transition-all">
        {icon && <div className="text-gray-400 mr-2">{icon}</div>}
        <input
            type={type}
            name={name}
            id={name}
            className="w-full focus:outline-none"
            placeholder={`Please enter ${label.toLowerCase()}...`}
        />
    </div>
);

const TextAreaField = ({ label, name, icon }) => (
    <div>
        <label
            className="block text-sm font-medium text-charcoal mb-2"
            htmlFor={name}
        >
            {label}
        </label>
        <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-forest-green focus-within:outline-none transition-all">
            {icon && <div className="text-gray-400 p-3">{icon}</div>}
            <textarea
                name={name}
                id={name}
                className="w-full p-3 h-32 focus:outline-none"
                placeholder={`Please enter ${label.toLowerCase()}...`}
            ></textarea>
        </div>
    </div>
);

const WarehouseCard = ({ title, address, license, mapSrc }) => (
    <div className="flip-container" onClick={(e) => e.currentTarget.classList.toggle('hover')}>
        <div className="flipper">
            <div className="front">
                <div className="card-content">
                    <h2 className="title">{title}</h2>
                    <p className="address">{address}</p>
                </div>
            </div>
            <div className="back">
                <div className="card-content">
                    <h2 className="title">{title}</h2>
                    <p className="address">{address}</p>
                    {license && (
                        <p className="license">
                            <FaIdBadge className="icon" /> {license}
                        </p>
                    )}
                    {mapSrc && (
                        <iframe
                            src={mapSrc}
                            className="map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const warehouses = [
    {
        title: "Registered office & Air Warehouse (Public Bonded Warehouse)",
        address: "99/5, MGR Salai, Nagalkeni, Chromepet, Chennai - 600 044.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1181950323494!2d80.13705597489287!3d12.964287887350364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fca642e74c1%3A0x3e4978a4346badcf!2s99%2F5%2C%20MGR%20Rd%2C%20Shiva%20Shankar%20Nagar%2C%20Nagalkeni%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1723373408924!5m2!1sen!2sin",
    },
    {
        title: "Sea Warehouse Unit 1 (Public Bonded Warehouse)",
        address: "Door No. 90, G.N.T Road, Ponniamman Medu, Madhavaram, Chennai - 600060.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5988866790053!2d80.24479527489578!3d13.124577987205052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a718f7f82f%3A0xaf59e6437288f590!2s90%2C%20Grand%20Northern%20Trunk%20Rd%2C%20Kumar%20Nagar%2C%20Ponniamman%20Medu%2C%20Madhavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600060!5e0!3m2!1sen!2sin!4v1723373563315!5m2!1sen!2sin",
    },
    {
        title: "Sea Warehouse Unit 2 (Public Bonded and General Warehouse )",
        address: "SY. No 2/1A & 3/3A, Kathirvedu Village, Puzhal, Ambattur Taluk, Chennai - 600 066",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.152035598625!2d80.2060659!3d13.1528083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658d0487213f%3A0xed14c5fcdc36f0d9!2sCwc%20import!5e0!3m2!1sen!2sin!4v1724675986550!5m2!1sen!2sin",
    },
    {
        title: "General warehouse - 3PL",
        address: "185/1, Inflow Technologies Pvt. Ltd. C/O CWC Imports Pvt. Ltd., Adam Nagar Main Road, Nagalkeni, Chennai, Tamilnadu, India – 600044.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.0595051580046!2d80.12787039839478!3d12.964235699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f84089412db%3A0xa03e20f4a34833b7!2sINFLOW%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1724134772239!5m2!1sen!2sin",
    }
];

export default ContactUs;



