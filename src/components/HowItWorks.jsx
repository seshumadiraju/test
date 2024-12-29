const HowItWorks = () => {
  const steps = [
    {
      title: "Consultation",
      description:
        "We discuss your idea or business to understand your IP needs.",
    },
    {
      title: "Strategy Development",
      description:
        "Our experts craft a tailored strategy to protect your intellectual assets.",
    },
    {
      title: "Filing & Registration",
      description:
        "We handle all paperwork, compliance, and filing procedures on your behalf.",
    },
    {
      title: "Monitoring & Enforcement",
      description:
        "We ensure your IP stays protected and provide assistance in case of infringement.",
    },
  ];

  return (
    <div className=" bg-primary-50 howitworks py-8 px-6">
      <h2 className="text-3xl font-light text-grays-800">
        How <span className="text-primary-500 font-semibold">It Works</span>
      </h2>
      <div className="flex flex-col space-y-4 mt-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md shadow-primary-300 flex flex-col items-start"
          >
            <h3 className="text-grays-900 text-lg font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
