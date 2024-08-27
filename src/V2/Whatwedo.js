import AirCargo from "../assets/images/Aircargo.jpg";
import Whatwehave from "./Whatwehave";
import Logistics from "../assets/images/LOGISTICSERVICES.jpg";
import Warehouse from "../assets/images/WAREHOUSE.jpg";
import Trucking from "../assets/images/TRUCKINGSERVICES.jpg";
import Hydraulic from "../assets/images/HYDRAULICSTACKERS.jpg";
import Stackers from "../assets/images/STACKERS.jpg";
import WeOffer from "../components/WeOffer";
import { FaWarehouse, FaTruck, FaBoxes } from "react-icons/fa";
import warehousestorage from "../assets/images/warehousestorage.jpg";
import storage from "../assets/images/Storage.jpg";
import threepl from "../assets/images/3PL.jpg";
import { MHE } from "../components/MHE";
import forklift from "../assets/videos/forklift.mp4";
import crane from "../assets/videos/crane.mp4";
import trolley from "../assets/videos/trolley.mp4";

const Whatwedo = () => {
  return (
    <div className="py-10 px-4 sm:px-16">
      <h1 className="font-inter font-bold text-gray-300 text-3xl sm:text-4xl text-center pb-9">
        What We Do ?
      </h1>
      
      {/* Whatwehave Section */}
      <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:overflow-x-auto lg:gap-6">
        <Whatwehave image={AirCargo} name={"AIR CARGO SERVICES"} desc={"We can package and store your things."} />
        <Whatwehave image={Trucking} name={"TRUCKING SERVICES"} desc={"Let us transport your things from point A to point B fast and secure"} />
        <Whatwehave image={Warehouse} name={"WAREHOUSING"} desc={"We have top notch security and loads of space. Store your stuff at our warehouse."} />
        <Whatwehave image={Hydraulic} name={"HYDRAULIC STACKERS"} desc={"Do you need something delivered? We are what you are looking for!"} />
        <Whatwehave image={Logistics} name={"LOGISTIC SERVICES"} desc={"We can transport your things anywhere in the world."} />
        <Whatwehave image={Stackers} name={"STACKERS"} desc={"Transport your things with our super moving vans."} />
      </div>

      <div className="mt-8">
          <h1 className="font-inter font-bold text-gray-300 text-2xl sm:text-3xl text-center">
            Our Infrastructure and Equipments
          </h1>
          <div className="justify-center flex items-center gap-10">
            <MHE video={forklift} servicename={"Fork Lifts"}  />
            <MHE video={crane} servicename={"Cranes"}  />
            <MHE video={trolley} servicename={"Trolley"} />
          </div>
      </div>

      <div className="mt-8">
        <h1 className="font-inter font-bold text-gray-300 text-2xl sm:text-3xl text-center">
          We Offer
        </h1>
        <div className="flex flex-col gap-8 mt-4 sm:flex-row sm:gap-10">
          <WeOffer 
            servicename={"Warehousing"} 
            image={warehousestorage} 
            Icon={FaWarehouse} 
            paragraph1={"Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team have years of experience in this business and can handle long term and large scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing and distribution services requirements, and allow us to make a positive difference in your business."} 
            paragraph2={ "Moreover, our supply chain management experts would design a logistic process especially for you to align with your business in an integrated fashion. Our warehousing services, includes a wide range of services that includes inventory control and management, load building, yard management, static and dynamic replenishment, kitting, order processing, vendor performance, cross docking, supply chain management, logistic integration, bar coding, quality control, labelling, carrier performance, and so on."} 
          />
          <WeOffer 
            servicename={"Storage"} 
            image={storage} 
            Icon={FaBoxes} 
            paragraph1={"We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, which focuses on not only increasing efficiency, but cutting down costs. With our vast network of warehouses and distribution centers spread throughout the country, it becomes much easier to cater to a audience in a record response time, which is the key factor in winning the hearts of the customer and having an edge over the competitors."} 
            paragraph2={"Team of logistic experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your budget, but would also save you considerable amount of money in the long term. Our company has through years of experience in this industry has been able to create a network of associates across the length and breadth of country, with our own logistic centers spread throughout the country, which helps us to provide safe, reliable, economical and customized logistic solutions to our clients and partners."}
          />
          <WeOffer 
            servicename={"3PL Services"} 
            image={threepl} 
            Icon={FaTruck} 
            paragraph1={"Ground transport and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, delivery time, while focusing on end user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation.Our logistic and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, delivery time, while focusing on end user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation."} 
            paragraph2={ "We ensure that our fleet of trucks are always well maintained, and have the best and the most updated fleet of trucks in service to ensure that it is capable of delivering high value, and oversized deliverables, efficiently and effectively, without causing any kind of loss, which is generally the case seen with many outsourced trucking service providers."}
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
