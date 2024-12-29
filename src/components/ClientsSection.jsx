import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const ClientsSection = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleNavigate = () => {
    navigate("/clients"); // Navigate to the clients page
  };

  return (
    <div className="bg-blue-50 py-8 px-6">
      <h2 className="text-3xl font-light text-grays-800">
        Our <span className="text-primary-500 font-semibold">Clients</span>
      </h2>
      <div className="mt-6">
        <p className="text-grays-700 mb-4">
          At filemyIP, we serve inventors, startups, and global corporations,
          providing expert solutions to protect and manage their intellectual
          property.
        </p>
        <button
          className="flex items-center space-between bg-primary-500 hover:bg-primary-700 text-white px-4 py-1 font-semibold rounded-md"
          onClick={handleNavigate}
        >
          Our Clients & their stories{" "}
          <i className="bi bi-arrow-right-short text-white text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ClientsSection;
