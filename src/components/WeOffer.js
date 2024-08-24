const WeOffer = ({ servicename, paragraph1, paragraph2, Icon, image }) => {
  return (
    <div className="relative w-full max-w-lg mt-4 group overflow-hidden">
      <div className="relative z-10 bg-lightgray rounded-lg transition-all duration-300 py-2 group-hover:h-auto">
        {/* Header with Icon and Service Name */}
        <div className="flex items-center px-4 py-4 md:px-10 md:py-6 max-md:flex-col">
          <Icon className="text-blue text-3xl md:text-4xl mb-2 md:mb-0" />
          <h1 className="text-blue text-xl md:text-2xl font-inter font-medium ml-4">
            {servicename}
          </h1>
        </div>

        {/* Hidden Content Revealed on Hover */}
        <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-[1270px] group-hover:py-4">
          <div className="flex flex-col items-center">
            <img src={image} className="rounded-md w-64 md:w-96 mb-6" />
            <p className="text-lightblack px-6 md:px-10 text-sm md:text-md font-inter font-medium text-justify mb-2">
              {paragraph1}
            </p>
            <p className="text-lightblack px-6 md:px-10 text-sm md:text-md font-inter font-medium text-justify">
              {paragraph2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
