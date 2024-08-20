import Suresh from "../assets/images/Suresh.svg";

const Director = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center lg:justify-center gap-8">
      {/* Director Image */}
      <img
        className="w-48 h-48 lg:w-56 lg:h-56 object-cover"
        src={Suresh}
        alt="director"
      />

      {/* Director Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-blue font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl">
          Our Core Values
        </h1>
        <p className="font-inter text-lightgray text-base md:text-lg">
          We assure a most dedicated service and shall be very fair and flexible in all our dealings with the customers, solely looking for excellent rapport and continued relations. We look upon your kind self to support us, vesting in us the best opportunity of handling all your valued cargoes.
        </p>
        <div className="flex flex-col items-start lg:items-end">
          <h1 className="font-montserrat font-bold text-blue text-lg lg:text-xl">
            - Suresh Singh
          </h1>
          <p className="text-lightgray text-sm lg:text-base">Director</p>
        </div>
      </div>
    </div>
  );
};

export default Director;
