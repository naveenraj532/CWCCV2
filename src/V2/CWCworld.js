import cwcworld from "../assets/images/WorldCWC0.png"


const CWCworld = () => {

  return (

        <div className="relative flex justify-center items-center h-[500px] overflow-hidden group">
            <img
            src={cwcworld}
            className="h-[600px] max-md:h-[400px] max-sm:h-[300px] z-10 drop-shadow-[0_0_20px_rgba(75,0,150,0.8)] transform transition-transform duration-700 group-hover:translate-x-[-35%] max-md:group-hover:translate-x-[-26%] max-sm:group-hover:translate-y-[-45%] max-sm:group-hover:translate-x-[0]  group-hover:scale-90 max-md:group-hover:scale-75"
            />


            <div className="absolute flex flex-col gap-10 opacity-0 transform transition-all duration-700 group-hover:translate-x-[75%] max-sm:group-hover:translate-y-[60%] max-md:group-hover:translate-x-[80%] max-sm:group-hover:translate-x-[0] max-sm:ml-3 group-hover:opacity-100">
                <div className="flex font-palanquin font-extrabold text-3xl max-sm:text-sm max-md:text-sm leading-normal text-lightgray flex-row gap-7 max-sm:gap-4 max-md:gap-4">
                <div className="bg-blue w-2 h-20 max-sm:h-10 max-md:h-9"></div>
                <h1>
                    UNBEATABLE TRUCKING AND <br />
                    TRANSPORT SERVICES
                </h1>
                </div>
                <div className="flex font-palanquin font-extrabold text-3xl max-sm:text-sm max-md:text-sm leading-normal text-lightgray flex-row gap-7 max-sm:gap-4 max-md:gap-4">
                <div className="bg-blue w-2 h-20 max-sm:h-10 max-md:h-9"></div>
                <h1>
                    GROUND OR AIR, THERE IS NO <br />
                    STOPPING FOR US
                </h1>
                </div>
                <div className="flex font-palanquin font-extrabold text-3xl max-md:text-sm max-sm:text-sm leading-normal text-lightgray flex-row gap-7 max-sm:gap-4 max-md:gap-4">
                <div className="bg-blue w-2 h-20 max-sm:h-10 max-md:h-9"></div>
                <h1>
                    GROUND OR WATER, THERE IS NO <br />
                    STOPPING FOR US
                </h1>
                </div>
            </div>
        </div>


  )
}

export default CWCworld