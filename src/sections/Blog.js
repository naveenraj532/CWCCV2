import BlogCard from "../components/BlogCard"

export const Blog = () => {
  return (
    <div className="flex flex-col justify-center px-24 bg-navy h-[550px]">
        <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-row items-start justify-between gap-11">
                <h1 className="text-light-gray mr-auto mt-2 font-normal font-montserrat text-2xl">
                Not sure which solution fits your business needs ?
                </h1>
                <button className='flex mt-2 px-[75px] py-2 font-montserrat text-md lead-none bg-blue rounded-md text-white'>
                Request a Quote
                </button>
            </div>
            <div className="flex flex-row gap-[60px] justify-center">
                <BlogCard blogname={"Blog1"} blogdate={"03-Aug-2024"} />
                <BlogCard blogname={"Blog1"} blogdate={"03-Aug-2024"} />
                <BlogCard blogname={"Blog1"} blogdate={"03-Aug-2024"} />
                <BlogCard blogname={"Blog1"} blogdate={"03-Aug-2024"} />
            </div>
        </div>
    </div>
  )
}
