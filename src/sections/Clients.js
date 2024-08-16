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
import client17 from "../assets/images/client-17.jpg";

const clients = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client17
];

export const Clients = () => {
  return (
    <div className="text-center py-12 bg-light-gray">
      <h1 className="text-navy font-montserrat font-bold text-3xl mb-8">Our Clients</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center opacity-0 animate-fadeIn delay-[150ms]"
            style={{ animationDelay: `${index * 150}ms` }} // Custom delay for staggered animation
          >
            <img
              src={client}
              alt={`Client ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
