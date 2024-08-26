export const MHE = ({ video, servicename, description }) => {
    return (
      <div className="flex max-lg:flex-1 gap-5 mt-5 border-solid border-lightgray">
        <div>
          <video src={video} className="max-lg: w-[400px]" autoPlay muted loop />
        </div>
        <div>
          <h1 className="font-montserrat text-lightgray font-bold text-2xl mb-1">{servicename}</h1>
          <p className="font-inter text-sm text-justify text-lightgray w-96">{description}</p>
        </div>
      </div>
    );
  }
  