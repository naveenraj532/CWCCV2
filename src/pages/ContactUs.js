import { useEffect, useRef } from "react";
import { FaEnvelope, FaUser, FaTag, FaPhone, FaComment, FaIdBadge, FaMapMarkerAlt } from 'react-icons/fa';
import ImageSlider from "../components/ImageSlider";

const ContactUs = () => {
    const contactUsRef = useRef(null);
    const formRef = useRef(null);
    const warehouseRef1 = useRef(null);
    const warehouseRef2 = useRef(null);
    const warehouseRef3 = useRef(null);

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

        if (contactUsRef.current) observer.observe(contactUsRef.current);
        if (formRef.current) observer.observe(formRef.current);
        if (warehouseRef1.current) observer.observe(warehouseRef1.current);
        if (warehouseRef2.current) observer.observe(warehouseRef2.current);
        if (warehouseRef3.current) observer.observe(warehouseRef3.current);

        return () => observer.disconnect();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "85b206b6-8a45-458e-8417-6bd2f8aad1f0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <h1 ref={contactUsRef} className="font-montserrat mt-24 font-bold text-charcoal text-4xl text-center opacity-0">
                Contact Us
            </h1>
            <div className="min-h-screen bg-gradient-to-b from-blue to-white text-charcoal font-montserrat p-6 mt-8 md:p-12 mb-12">
                <div className="flex flex-col gap-10 md:flex-row items-start md:items-start px-16 md:px-8">
                    <div className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-4">
                        <div ref={warehouseRef1} className="opacity-0">
                            <WarehouseCard
                                title="Air Warehouse"
                                address="99/5, MGR Salai, Nagalkeni, Chromepet, Chennai - 600 044."
                                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1181950323494!2d80.13705597489287!3d12.964287887350364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fca642e74c1%3A0x3e4978a4346badcf!2s99%2F5%2C%20MGR%20Rd%2C%20Shiva%20Shankar%20Nagar%2C%20Nagalkeni%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1723373408924!5m2!1sen!2sin"
                            />
                        </div>
                        <div ref={warehouseRef2} className="opacity-0">
                            <WarehouseCard
                                title="Sea Warehouse Unit 1"
                                address="Door No. 90, G.N.T Road, Ponniamman Medu, Madhavaram, Chennai - 600060."
                                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5988866790053!2d80.24479527489578!3d13.124577987205052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a718f7f82f%3A0xaf59e6437288f590!2s90%2C%20Grand%20Northern%20Trunk%20Rd%2C%20Kumar%20Nagar%2C%20Kennedy%20Nagar%2C%20Erukkancheri%2C%20Madhavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600118!5e0!3m2!1sen!2sin!4v1723481675498!5m2!1sen!2sin"
                            />
                        </div>
                        <div ref={warehouseRef3} className="opacity-0">
                            <WarehouseCard
                                title="Sea Warehouse Unit 2/100000 SQF"
                                address="SY. No 2/1A &3/3A, Kathirvedu Village, Puzhal, Ambattur Taluk, Chennai - 600 066."
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <form ref={formRef} onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out opacity-0">
                            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
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
                                <button type="submit" className="bg-forest-green text-white py-2 px-6 rounded-full shadow-xl hover:bg-green-700 transition-all">
                                    Submit
                                </button>
                            </div>
                        </form>
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </>
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
    <div className="bg-white w-96 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mb-8">
        <h2 className="text-lg w-80 font-bold text-center mb-4">{title}</h2>
        <p className="text-charcoal mb-4 flex items-start">
            <FaMapMarkerAlt className="mr-2 mt-1 text-forest-green" /> {address}
        </p>
        {license && (
            <p className="text-charcoal mb-4 flex items-start">
                <FaIdBadge className="mr-2 mt-1 text-forest-green" /> {license}
            </p>
        )}
        {mapSrc && (
            <iframe
                src={mapSrc}
                className="w-full h-48 mt-4 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        )}
    </div>
);

export default ContactUs;
