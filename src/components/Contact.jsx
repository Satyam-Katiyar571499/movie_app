import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-[#1f1e24] text-white px-[8%] py-10">
      
      <h1 className="text-4xl font-black mb-8 flex items-center gap-3">
        <i
          onClick={() => navigate(-1)}
          className="cursor-pointer hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        Contact Us
      </h1>

      <div className="max-w-3xl">
        <p className="text-lg text-gray-300 leading-8 mb-8">
          If you have any questions, feedback, or suggestions regarding NDFRP,
          feel free to reach out. We are always open to improving the platform
          and enhancing user experience.
        </p>

        <div className="bg-[#2a2930] p-6 rounded-xl space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-300">katiyarguru6@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-300">+91 7905872178</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-gray-300">Kannauj</p>
          </div>
        </div>

        <div className="mt-10 bg-[#2a2930] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1f1e24] border border-gray-600 outline-none focus:border-[#6556CD]"
            />

            <input
              type="email"
              placeholder="your email"
              className="w-full p-3 rounded bg-[#1f1e24] border border-gray-600 outline-none focus:border-[#6556CD]"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-[#1f1e24] border border-gray-600 outline-none focus:border-[#6556CD]"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-[#6556CD] rounded hover:bg-[#4e44a3] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;