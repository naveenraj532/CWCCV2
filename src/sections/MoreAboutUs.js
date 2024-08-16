import aboutus from "../assets/images/aboutus.jpg";
import Button from "../components/Button";


const MoreAboutUs = () => {
  return (
    <div className="flex flex-col items-center custom-container"> {/* Apply the custom styles here */}
      <img src={aboutus} alt="about us" className="shadow-sm" />
      <h1 className="
      mt-4 text-navy font-montserrat font-bold text-3xl text-center">Hello There And Welcome</h1>
      <p className="mt-2 font-inter font-medium px-16 text-center">
        With the passing of time and gaining of exposure, the varieties of cargos we handled increased manifold and presently comprise bagged consignments, palletized items, cartons, drums, wooden cases, machineries (including heavier ones), tools components, many break-bulk items, and umpteen of other notified items. Accordingly, our equipage also underwent a big change into a modern ones.
      </p>
      <Button className="flex justify-center items-center" label={"More About Us"} />
    </div>
  );
};

export default MoreAboutUs;
