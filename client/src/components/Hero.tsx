import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-950 h-[23rem] flex justify-center items-center ">
      <div className=" text-white py-16 mx-2 rounded-xl flex flex-col  text-center">
        <div className="flex flex-col gap-4">
          <span className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Over 10,000+ jobs to apply
          </span>
          <p className="mb-8 mx-w-xl mx-auto text-sm font-light px-5">
            Your Next Big Career Move Starts Right Here - Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>
        </div>
        <div className="flex items-center justify-center bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto ">
          <div className="flex items-center">
            <img
              src={assets.search_icon}
              className="h-4 lg:h-5"
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search for jobs"
              name="search"
              className="px-4 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" flex  items-center">
            <img
              className="h-4 lg:h-5"
              src={assets.location_icon}
              alt="location-icon"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="px-4 py-2  border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600  px-6 py-2 rounded text-center text-white m-1">
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
