const OurServices = () => {
  const services = [
    {
      name: "Patent Filing and Prosecution",
      link: "/patent-filing-prosecution",
    },
    { name: "Trademark Registration", link: "/trademark-registration" },
    { name: "Copyright Registration", link: "/copyright-registration" },
    { name: "Design Registration", link: "/design-registration" },
    { name: "Geographical Indications", link: "/geographical-indications" },
    { name: "Plant Variety Rights", link: "/plant-variety-rights" },
    {
      name: "International Filings (WIPO Services)",
      link: "/international-filings",
    },
    { name: "IP Portfolio Management", link: "/ip-portfolio-management" },
    {
      name: "IP Enforcement & Litigation Support",
      link: "/ip-enforcement-litigation",
    },
  ];

  return (
    <div className="services-section py-8 px-6">
      <div className="container mx-auto max-w-[1240px] px-0 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-grays-800">
          Our <span className="text-primary-500 font-semibold">Services</span>
        </h2>
        <ul className="mt-6 space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-200 pb-2 last-of-type:border-none"
            >
              <a
                href={service.link}
                className="text-md text-grays-700 hover:text-primary-500 transition"
              >
                {service.name}
              </a>
              <i className="bi bi-arrow-right-short text-primary-500 text-3xl"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
