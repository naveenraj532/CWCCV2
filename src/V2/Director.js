import Suresh from "../assets/images/Suresh.svg";

const Director = () => {
  return (
    <div className="px-80 justify-center items-center flex flex-row gap-20">
        <img height={200} width={200} src={Suresh} alt="director.png" />
        <div className="flex flex-col gap-1">
            <h1 className="text-blue font-montserrat font-bold text-3xl">Our Core Values</h1>
            <p className="font-inter text-lightgray font-normal ">We assure a most dedicated service and shall be very fair and flexible in all our dealings with the customers,solely looking for excellenet rapport and continued relations.We look upon your kind self to support us,vesting in us the best opportunity of handling all your valued cargoes.</p>
            <div className="flex flex-col items-end">
                <h1 className=" font-montserrat font-bold text-blue text-md">- Suresh Singh</h1>
                <p className="ml-2 text-lightgray text-justify">Director</p>
            </div>
        </div>
    </div>
  )
}

export default Director;

