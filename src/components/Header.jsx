import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import if using React Router

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate(); // For React Router navigation

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected option
  };

  const handleButtonClick = () => {
    if (selectedOption) {
      navigate(`/${selectedOption}`); // Redirect to the selected page
    } else {
      alert("Please select an option before proceeding."); // Handle empty selection
    }
  };

  return (
    <div className="header-main py-6 md:py-12 px-6">
      <div className="container mx-auto max-w-[1240px] px-0 sm:px-6 lg:px-8">
        <h1 className="text-[48px] font-semibold leading-tight text-white">
          Secure Your Ideas, Protect Your Marks, Stand by Your Rights, and
          Design Your Future Identity.
        </h1>

        <div className="flex flex-col gap-4 mt-7 md:mt-10">
          <select
            onChange={handleSelectChange} // Update state when selection changes
            value={selectedOption}
            className="w-full md:w-80 md:max-w-80 rounded-md px-3 py-3 text-gray-800"
          >
            <option value="">Select an option</option>
            <option value="patent-filing-prosecution">
              Patent Filing and Prosecution
            </option>
            <option value="trademark-registration">
              Trademark Registration
            </option>
            <option value="copyright-registration">
              Copyright Registration
            </option>
            <option value="design-registration">Design Registration</option>
            <option value="geographical-indications">
              Geographical Indications
            </option>
            <option value="plant-variety-rights">Plant Variety Rights</option>
            <option value="international-filings">
              International Filings (WIPO Services)
            </option>
            <option value="ip-portfolio-management">
              IP Portfolio Management
            </option>
            <option value="ip-enforcement-litigation">
              IP Enforcement & Litigation Support
            </option>
          </select>
          <button
            onClick={handleButtonClick} // Handle redirection on button click
            className="rounded-md bg-yellow-400 px-4 py-3 font-semibold"
          >
            ACT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
