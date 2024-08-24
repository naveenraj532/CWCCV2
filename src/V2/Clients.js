import clientlogos from "../assets/images/clients.png";

export const Clients = () => {
  return (
    <div className="py-10">
      <h1 className="font-inter font-bold text-gray-300 text-4xl text-center pb-9">
        Our Clients
      </h1>
      <div className="slider overflow-hidden relative">
        <div className="slide-track flex items-center animate-scroll">
          <img
            src={clientlogos}
            alt="logos"
            className="w-full h-full object-cover"
          />
          <img
            src={clientlogos}
            alt="logos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
