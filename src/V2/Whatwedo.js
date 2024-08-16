import AirCargo from "../assets/images/Aircargo.jpg"
import Whatwehave from "../sections/Whatwehave"
import Logistics from "../assets/images/LOGISTICSERVICES.jpg";
import Warehouse from "../assets/images/WAREHOUSE.jpg";
import Trucking from "..//assets/images/TRUCKINGSERVICES.jpg";
import Hydraulic from "../assets/images/HYDRAULICSTACKERS.jpg";
import Stackers from "../assets/images/STACKERS.jpg";
import WeOffer from "../components/WeOffer";


const Whatwedo = () => {
  return (
    <div className=" py-10 px-16">
        <h1 className="font-inter font-bold text-gray-300 text-4xl text-center pb-9">What We Do ?</h1>
        <div className="flex flex-row gap-10 justify-center">

                    <Whatwehave image={AirCargo} name={"AIR CARGO SERVICES"} desc={"We can package and store your things."} />
                    <Whatwehave image={Trucking} name={"TRUCKING SERVICES"} desc={"Let us transport your things from point A to point B fast and secure"} />
                    <Whatwehave image={Warehouse} name={"WAREHOUSING"} desc={"We have top notch security and loads of space. Store your stuff at our warehouse."} />
                    <Whatwehave image={Hydraulic} name={"HYDRAULIC STACKERS"} desc={"Do you need something delivered ? We are what you ae looking for!"} />
                    <Whatwehave image={Logistics} name={"LOGISTIC SERVICES"} desc={"We can transport your things anywhere in the world."} />
                    <Whatwehave image={Stackers} name={"STACKERS"} desc={"Transport your things with our super moving vans."} />

            </div>
            <div>
                <h1 className="font-inter font-bold text-gray-300 text-2xl mt-8">We Offer</h1>
                <WeOffer servicename={"Warehousing"} paragraph={"Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team have years of experience in this business and can handle long term and large scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing and distribution services requirements, and allow us to make a positive difference in your business. Moreover, our supply chain management experts would design a logistic process especially for you to align with your business in an integrated fashion. Our warehousing services, includes a wide range of services that includes inventory control and management, load building, yard management, static and dynamic replenishment, kitting, order processing, vendor performance, cross docking, supply chain management, logistic integration, bar coding, quality control, labelling, carrier performance, and so on."} />
                <WeOffer servicename={"Storage"} />
                <WeOffer servicename={"3PL Services"} />
            </div>
    </div>

  )
}

export default Whatwedo