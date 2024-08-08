import { CheckCircle2 } from "lucide-react"; // Import the CheckCircle2 icon from the Lucide icon library
import codeImg from "../assets/code.jpg"; // Import the image file for display
import { checklistItems } from "../constants"; // Import checklist items from a constants file

// Define the Workflow component
const Workflow = () => {
  return (
    // Main container for the workflow section with top margin
    <div className="mt-20">
      {/* Section heading with gradient text */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      {/* Flex container for layout with wrapped items */}
      <div className="flex flex-wrap justify-center">
        {/* Image container on the left side */}
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        {/* Checklist items container on the right side */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            // Individual checklist item container with bottom margin
            <div key={index} className="flex mb-12">
              {/* Icon container with background and styling */}
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              {/* Title and description of the checklist item */}
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the Workflow component for use in other files
export default Workflow;
