import Suresh from "../assets/images/Suresh.svg";

const Director = () => {
  return (
    <div className="px-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Image section */}
      <img
        className="w-48 h-auto md:w-64 lg:w-80 rounded-full"
        src={Suresh}
        alt="director.png"
      />
      {/* Text section */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-blue font-montserrat font-bold text-2xl md:text-3xl">
          Our Core Values
        </h1>
        <p className="font-inter text-lightgray font-normal text-sm md:text-base">
          We assure a most dedicated service and shall be very fair and flexible
          in all our dealings with the customers, solely looking for excellent
          rapport and continued relations. We look upon your kind self to
          support us, vesting in us the best opportunity of handling all your
          valued cargoes.
        </p>
        <div className="flex flex-col items-center md:items-end mt-4">
          <h1 className="font-montserrat font-bold text-blue text-md">
            - Suresh Singh
          </h1>
          <p className="text-lightgray text-sm">Director</p>
        </div>
      </div>
    </div>
  );
};

export default Director;
