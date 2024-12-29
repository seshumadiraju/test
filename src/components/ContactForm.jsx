import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65124ba8-554f-4003-9c61-290905bc03ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-light text-grays-800">
        Contact <span className="text-primary-500 font-semibold">Us</span>
      </h2>
      <div className="mt-6">
        <p className="text-grays-700">
          <span className=" text-grays-900 font-semibold">Get in Touch:</span>{" "}
          Have a question or ready to file your IP? Contact us today!
        </p>
        <form onSubmit={onSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-grays-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Please Enter Your Name"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-300 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-grays-700">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Please Enter Your Email ID"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-300 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-grays-700">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Please Enter Your Email ID"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-300 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              required
            ></textarea>
          </div>

          {/* <input type="text" name="name" required />
          <input type="email" name="email" required />
          <textarea name="message" required></textarea> */}

          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-700 text-white px-4 py-3 font-semibold rounded-md min-w-48"
          >
            Submit Form
          </button>
        </form>
      </div>
      <span>{result}</span>
    </div>
  );
}
