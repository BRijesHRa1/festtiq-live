import React, { useState } from "react";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { HandPointing } from "@phosphor-icons/react";
import service1 from "../assets/events/event4.png";
import Question from "../components/Home/Question";

const services = [
  { id: 1, title: "Décor & Design", price: 5000, img: service1 },
  { id: 2, title: "Photography", price: 5000, img: service1 },
  { id: 3, title: "Videography", price: 5000, img: service1 },
  { id: 4, title: "Makeup & Hairstyling", price: 5000, img: service1 },
  { id: 5, title: "Mehndi", price: 5000, img: service1 },
  { id: 6, title: "Entertainment", price: 5000, img: service1 },
];

function Services() {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggle = (id) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="flex flex-col pt-[100px] items-center bg-white w-full max-w-[1440px] mx-auto gap-y-[40px] py-6 px-4 sm:px-6">
      {/* 1) Nav */}
      <nav className="w-full">{/* …nav items here… */}</nav>

      {/* 2) Comprehensive Services banner */}
      <div className="flex flex-col items-center justify-center w-full max-w-[850px] space-y-[24px] p-4 mx-auto">
        <h2 className="font-abhaya text-[36px] sm:text-[48px] md:text-[64px] leading-[117%] tracking-[-1.5px] text-[#181375] text-center">
          Comprehensive Services For
          <br />
          Every Occasion
        </h2>
        <p className="w-full text-[16px] sm:text-[18px] md:text-[20px] text-center text-[#212121] leading-[160%] tracking-[0.15px]">
          Pick from our curated list of services, tailored to make your event
          truly special. Each service comes with a clear price range to suit
          your needs.
        </p>
      </div>

      {/* 3) Three-step row */}
      <div className="mt-[60px] flex flex-col md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-4 gap-y-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-[280px]">
          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
            <HandPointing size={32} color="#9C27B0" weight="bold" />
          </div>
          <h3 className="font-plusjakarta font-semibold text-[24px] text-[#212121]">
            Pick Your Services
          </h3>
          <p className="font-plusjakarta text-[16px] leading-[150%] text-gray-600">
            Select the services you need and pick your event date.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-[280px]">
          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="font-plusjakarta font-semibold text-[24px] text-[#212121]">
            Confirm Bookings
          </h3>
          <p className="font-plusjakarta text-[16px] leading-[150%] text-gray-600">
            Receive an instant confirmation after selecting your services.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-[280px]">
          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
            <SparklesIcon className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="font-plusjakarta font-semibold text-[24px] text-[#212121]">
            Book and Relax
          </h3>
          <p className="font-plusjakarta text-[16px] leading-[150%] text-gray-600">
            Sit back as our team ensures everything is taken care of.
          </p>
        </div>
      </div>

      {/* 4) Your Event, Your Choice banner */}
      <div className="mt-[60px] flex flex-col items-center justify-center w-full max-w-[850px] space-y-2 mx-auto px-4">
        <h2 className="font-abhaya text-[32px] sm:text-[40px] md:text-[48px] leading-[117%] tracking-[-1.5px] text-[#181375] text-center">
          Your Event, Your Choice
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] tracking-[0.15px] text-[#212121] text-center">
          Choose from our range. Add as many services as you need, all in one
          booking.
        </p>
      </div>

      {/* 5) Services Grid */}
      <div className="py-6 w-full">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-[60px] gap-[20px]">
          {services.map((svc) => {
            const isSelected = selectedIds.includes(svc.id);
            return (
              <div
                key={svc.id}
                onClick={() => toggle(svc.id)}
                className={`w-full cursor-pointer rounded-[20px] overflow-hidden border ${
                  isSelected
                    ? "border-2 border-[#A259FF]"
                    : "border-gray-200"
                } bg-[#F4F4F5] transition-shadow hover:shadow-lg`}
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 pb-[20px] relative flex flex-col gap-y-[20px]">
                  <div>
                    <h3 className="text-lg font-semibold">{svc.title}</h3>
                    <p className="text-gray-500">
                      Starts from ₹{svc.price.toLocaleString()}
                    </p>
                  </div>
                  {isSelected && (
                    <CheckCircleIcon className="w-6 h-6 text-[#A259FF] absolute top-4 right-4" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear / Proceed Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
          <button
            onClick={() => setSelectedIds([])}
            className="px-4 py-2 border border-[#A259FF] text-[#A259FF] rounded hover:bg-[#F5F0FF] w-full sm:w-auto"
          >
            Clear Selection
          </button>
          <button
            onClick={() =>
              alert(`Proceed with IDs: ${selectedIds.join(", ")}`)
            }
            className="px-4 py-2 bg-[#A259FF] text-white rounded hover:bg-[#8B41E6] w-full sm:w-auto"
          >
            Proceed →
          </button>
        </div>
      </div>

      <Question />
    </div>
  );
}

export default Services;
