import ServiceCard from "../components/ServiceCard"
import airportticket from "../assets/icons/Airplaneticket.svg";
import containerTruck from "../assets/icons/ContainerTruck.svg";
import  Hydraulic from "../assets/icons/Hydraulic.svg";
import logistic from "../assets/icons/logistic.svg";
import stacketrs from "../assets/icons/stackers.svg";
import Warehouse from "../assets/icons/Warehouse.svg";


export const Services = () => {
  return (
    <div className="px-16">
        <h1 className=" justify-center text-navy font-montserrat font-bold text-3xl text-center">Our Services</h1>
        <div className="items-center mt-6 flex flex-col gap-10">
            <div className="flex flex-row gap-20">
                <ServiceCard iconUrl={airportticket} label={"AIR CARGO SERVICES"} description={"We can package and store your things."}/>
                <ServiceCard iconUrl={containerTruck} label={"TRUCKING SERVICES"} description={"Let us transport your things from point A to point B fast and secure."}/>
                <ServiceCard iconUrl={Warehouse} label={"WAREHOUSING"} description={"We have top notch security and loads of space. Store your stuff at our warehouse"}/>
            </div>
            <div className="flex flex-row gap-20">
                <ServiceCard iconUrl={Hydraulic} label={"HYDRAULIC STACKERS"} description={"Do you need something delivered ? We are what you ae looking for!"}/>
                <ServiceCard iconUrl={logistic} label={"LOGISTIC SERVICES"} description={"We can transport your things anywhere in the world."}/>
                <ServiceCard iconUrl={stacketrs} label={"STACKERS"} description={"Transport your things with our super moving vans."}/>
            </div>
        </div>
    </div>
  )
}
