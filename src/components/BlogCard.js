import forblog from "../assets/images/forblog.jpg";

const BlogCard = ({ blogname, blogdate }) => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <div className="bg-light-gray h-[350px] w-72 border rounded-2xl rounded-bl-2xl rounded-br-2xl shadow-custom-blue">
        <img
          src={forblog}
          alt="image"
          height={210}
          width={395}
          className="relative rounded-tl-2xl rounded-tr-2xl"
        />
        <h1 className="font-inter font-bold text-black ml-4 mt-5 text-2xl">
          {blogname}
        </h1>
        <div className="flex flex-row ml-4 mt-1 gap-2">
          <p
            className="font-montserrat font-normal text-charcoal"
            style={{ fontSize: "14px" }}
          >
            By CWCC
          </p>
          <p
            className="font-montserrat font-bold text-charcoal"
            style={{ fontSize: "14px" }}
          >
            {blogdate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
