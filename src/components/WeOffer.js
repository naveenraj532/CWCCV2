const WeOffer = ({ servicename, paragraph1, paragraph2, Icon, image }) => {
  return (
    <div className="relative w-[700px] mt-4 group overflow-hidden">
      <div className="relative z-10 bg-lightgray text-bold h-24 rounded-lg transition-all duration-300 py-2 group-hover:h-[1270px]">
        <div className="flex items-center px-10 py-4">
          <Icon className="text-blue text-4xl" />
          <h1 className="text-blue text-2xl font-inter font-medium ml-4">
            {servicename}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center  transform translate-y-full opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <img src={image} className="rounded-md w-96 mb-6" />
          <p className="text-lightblack px-10 text-md font-inter font-medium text-justify mb-2">
            {paragraph1}
          </p>
          <p className="text-lightblack px-10 text-md font-inter font-medium text-justify">
            {paragraph2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeOffer;