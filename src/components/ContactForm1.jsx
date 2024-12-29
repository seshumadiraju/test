import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Replace with your actual Web3Forms API endpoint
      const response = await axios.post(
        "65124ba8-554f-4003-9c61-290905bc03ea",
        formData
      );

      // Handle success
      console.log("Email sent successfully:", response.data);
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle error
      console.error("Error sending email:", error);
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
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-grays-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-200 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-grays-700">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-200 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-grays-700">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 py-2 px-4 w-full border-2 rounded-md border-grays-200 focus:shadow-lg shadow-primary-200 focus:ring-primary-500 focus:border-primary-700 outline-none focus:bg-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-700 text-white px-4 py-3 font-semibold rounded-md min-w-48"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-9 border-t-2 pt-9">
        <div className="flex items-center mb-2 border-2 rounded-md border-primary-50 px-4 py-3 bg-primary-50 font-semibold text-center justify-center">
          <a href="tel:+919000228664">+919000228664</a>
        </div>
        <div className="flex items-center mb-2 border-2 rounded-md border-primary-50 px-4 py-3 bg-primary-50 font-semibold text-center justify-center">
          <a href="mailto:info@filemyip.com">info@filemyip.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
