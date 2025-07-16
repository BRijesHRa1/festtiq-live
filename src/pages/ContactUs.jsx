import React from "react";
import quoteImg from "../assets/venue/contactus1.png";
import heroBg from "../assets/venue/contactus3.png"; // new background image

const ContactUs = () => {
  return (
    <div className="font-[Inter] pt-[100px]">
      {/* Hero Banner with Background Image */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16 text-center px-4"
        style={{ backgroundImage: `url(${quoteImg})` }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Let’s Connect!
        </h2>
        <p className="text-sm md:text-base text-white max-w-2xl mx-auto">
          Have a question, need assistance, or want to start planning your event?
          We’re here to help! Reach out to us through any of the options below.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <h3 className="text-2xl md:text-3xl text-center font-semibold text-[#181375] mb-10">
          Let’s Collaborate and Grow Together
        </h3>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 bg-[#F5EDFF] p-6 md:p-10 rounded-xl shadow-md">
          {/* Left Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={heroBg}
              alt="Contact Illustration"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Form */}
          <form className="w-full lg:w-1/2 space-y-4">
            <h4 className="text-lg md:text-xl font-semibold text-[#212121] mb-2">
              Get Your Personalized Quote!
            </h4>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-purple-600"
              required
            />

            <div className="flex gap-4">
              <div className="w-1/3">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="IN">IN 🇮🇳</option>
                  <option value="US">US 🇺🇸</option>
                  <option value="UK">UK 🇬🇧</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-2/3 border border-gray-300 rounded-md px-4 py-2 text-sm outline-purple-600"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-purple-600"
              required
            />

            <input
              type="text"
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-purple-600"
            />

            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none outline-purple-600"
            ></textarea>

            <button
              type="submit"
              className="bg-[#8F24AB] hover:bg-[#7b1e97] text-white font-semibold px-6 py-2 rounded-md text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
