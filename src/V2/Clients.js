
import client1 from "../assets/images/client-1.jpg";
import client2 from "../assets/images/client-2.jpg";
import client3 from "../assets/images/client-3.jpg";
import client4 from "../assets/images/client-4.jpg";
import client5 from "../assets/images/client-5.jpg";
import client6 from "../assets/images/client-6.jpg";
import client7 from "../assets/images/client-7.jpg";
import client8 from "../assets/images/client-8.jpg";
import client9 from "../assets/images/client-9.jpg";
import client10 from "../assets/images/client-10.jpg";
import client11 from "../assets/images/client-11.jpg";
import client12 from "../assets/images/client-12.jpg";
import client13 from "../assets/images/client-13.jpg";
import client14 from "../assets/images/client-14.jpg";
import client15 from "../assets/images/client-15.png";
import client16 from "../assets/images/client-16.png";
import client17 from "../assets/images/client-17.jpg";
import client18 from "../assets/images/client-18.png";
import client19 from "../assets/images/client19.png";
import client20 from "../assets/images/client20.png";
import client21 from "../assets/images/client21.png";
import client22 from "../assets/images/client22.png";
import client23 from "../assets/images/client23.png";
import client24 from "../assets/images/client24.png";
import client25 from "../assets/images/client25.png";
import client26 from "../assets/images/client26.webp";
import client27 from "../assets/images/client27.png";
import client28 from "../assets/images/client28.png";



const clients = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client17,
  client15, client16, client18, client19, client20,
  client21, client22, client23, client24, client25,
  client26, client27, client28
];

export const Clients = () => {
  return (
    <div className=""> {/* Added padding for better spacing */}
      <h1 className="font-inter font-bold text-gray-300 text-4xl text-center pb-9">
        Our Clients
      </h1>
      <div className="slider">
        <div className="slide-track">
          {clients.map((client, index) => (
            <div key={index} className="slide">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="w-32 h-24 object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate the clients for a seamless scroll */}
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="slide">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="w-32 h-24 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
