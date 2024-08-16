const ServiceCard = ({iconUrl, label, description}) => {
    return (
      <div className="flex flex-row space-x-5 justify-center items-center rounded-2xl shadow-custom w-fit px-8 py-4 hover:scale-105 transition-transform duration-300">
        <img className="w-15 h-10 object-cover" src={iconUrl} alt="icon" />
        <div>
          <h3 className="text-blue font-montserrat font-bold text-md">{label}</h3>
          <p className="font-montserrat text-sm w-48">{description}</p>
        </div>
      </div>
    )
  }
  
  export default ServiceCard;
  