import video2 from "../assets/video2.mp4"; // Import the first video file
import video3 from "../assets/video3.mp4"; // Import the second video file

// Define the HeroSection component
const HeroSection = () => {
  return (
    // Main container for the hero section with flexbox layout
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Main heading with gradient text */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      {/* Subheading paragraph with a maximum width for better readability */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      {/* Action buttons for starting or viewing documentation */}
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      {/* Video showcase section */}
      <div className="flex mt-10 justify-center">
        {/* First video player */}
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Second video player */}
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

// Export the HeroSection component for use in other files
export default HeroSection;

/* 
 * Note: The link below appears to be a reference for the video content or tutorial.
 * https://www.youtube.com/watch?v=EwzWg-Joxq0
 */
