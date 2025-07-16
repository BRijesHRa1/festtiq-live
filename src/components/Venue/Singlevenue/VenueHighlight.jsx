// import React, { useState } from "react";
// import SlideOver from "./Slideover";
// import { useNavigate } from "react-router-dom";

// import {
//   Armchair,
//   Car,
//   Door,
//   HouseLine,
//   Confetti,
//   Camera,
//   FilmSlate,
//   MagicWand,
//   HandPalm,
//   MicrophoneStage,
// } from "@phosphor-icons/react";

// const amenities = [
//   "Wi-Fi Access",
//   "Car Parking",
//   "Air Conditioning",
//   "Seating Arrangements",
//   "Catering Services",
//   "Kitchen Access",
//   "Dining Area",
//   "Stage & Podium",
//   "Lighting & Decoration Setup",
//   "Sound System",
//   "First Aid Kits",
//   "Lounge & Waiting Area",
//   "Restroom & Changing Rooms",
//   "Power Backup",
//   "Bridal Room",
//   "Outdoor Spaces",
// ];

// const extraServices = [
//   { label: "Décor", Icon: Confetti },
//   { label: "Photography", Icon: Camera },
//   { label: "Videography", Icon: FilmSlate },
//   { label: "Makeup & Hairstyle", Icon: MagicWand },
//   { label: "Mehndi", Icon: HandPalm },
//   { label: "Entertainment", Icon: MicrophoneStage },
// ];

// const VenueHighlight = () => {
//   const [showSlider, setShowSlider] = useState(false);
//   const [selectedServices, setSelectedServices] = useState([]);
// const navigate = useNavigate();

//   const toggleService = (service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service]
//     );
//   };


//   return (
//     <>
//       <div className="w-[1440px] h-[1041px] flex justify-between px-[96px] py-[20px] mx-auto bg-white font-['Plus_Jakarta_Sans']">
//         {/* LEFT SECTION */}
//         <div className="w-[740px] flex flex-col gap-[24px]">
//           <div className="flex flex-col gap-[12px]">
//             <h2 className="text-[#181375] text-3xl font-semibold leading-[22px] tracking-[-0.4px]">
//               Venue Highlights
//             </h2>
//             <p className="text-[#4F4F4F] text-lg py-2 leading-[20px]">
//               Guest Ratings <span className="text-yellow-400">★</span> 4.5
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-[10px] items-center text-sm">
//             <span className="text-gray-500">Venue Best for:</span>
//             {[
//               "Wedding",
//               "Birthday Party",
//               "Corporate Events",
//               "Family Celebrations",
//               "Baby Shower",
//             ].map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 border border-gray-400 rounded-full text-[12px] bg-[#FAFAFA] text-[#424242]"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <div className="flex text-[14px] mt-4 border-b border-gray-200 divide-x divide-gray-200">
//             {[
//               { label: "Hall Capacity", value: "800", Icon: Armchair },
//               { label: "Parking Slots", value: "180", Icon: Car },
//               { label: "Guest Rooms", value: "10", Icon: Door },
//               { label: "Venue Type", value: "Indoor", Icon: HouseLine },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="w-full py-4 px-4 flex flex-col items-center gap-1"
//               >
//                 <span className="text-gray-500 text-[12px]">{item.label}</span>
//                 <span className="text-[#181818] font-semibold text-[14px]">
//                   {item.value}
//                 </span>
//                 <item.Icon size={20} color="#9C27B0" weight="regular" />
//               </div>
//             ))}
//           </div>

//           <div className="pt-6">
//             <h2 className="text-[#181375] font-semibold text-[18px] leading-[24px] tracking-[0.4px] mb-4">
//               Amenities & Facilities
//             </h2>
//             <ul className="flex flex-col gap-[12px] text-[14px] text-[#4F4F4F]">
//               {amenities.map((item, i) => (
//                 <li key={i} className="flex items-start gap-2 leading-[20px]">
//                   <span className="text-[20px] leading-[16px]">•</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="w-[440px] bg-white h-screen shadow-md rounded-lg p-6 gap-[20px] flex flex-col border border-gray-200">
//           <h3 className="text-xl font-semibold">
//             ₹1,00,000{" "}
//             <span className="text-sm font-normal text-gray-500">per day</span>
//           </h3>

//           <input
//             type="text"
//             placeholder="Event Title"
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           />
//           <select className="border border-gray-300 rounded px-4 py-2 text-sm">
//             <option>Select Event Type</option>
//           </select>
//           <input
//             type="date"
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           />
//           <input
//             type="time"
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           />

//           <div className="text-sm text-gray-700 space-y-1">
//             <div className="flex justify-between">
//               <span>Base Price</span>
//               <span>₹2,00,000</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Service Fee</span>
//               <span>₹10,000</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Taxes & GST (18%)</span>
//               <span>₹19,800</span>
//             </div>
//             <div className="flex justify-between text-green-600 font-medium">
//               <span>Special Discount</span>
//               <span>-₹5,000</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold text-black">
//               <span>Total Amount</span>
//               <span>₹2,24,800</span>
//             </div>
//           </div>

//           <button
//             onClick={() => setShowSlider(true)}
//             className="w-[360px] h-[44px] text-white text-sm font-semibold rounded-md 
//             px-[20px] py-[8px] bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2]
//             shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]
//             hover:brightness-110 transition"
//           >
//             Secure Your Booking
//           </button>

//           <p className="text-xs text-gray-500 text-center">
//             *You can save up to 20% with Festal Payment Options
//           </p>
//           <p className="text-[11px] text-center text-[#828282]">
//             Need more details about the venue?{" "}
//             <span className="text-[#6610F2] underline cursor-pointer">
//               Contact us before booking
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* SlideOver with working icons */}
//       <SlideOver show={showSlider} onClose={() => setShowSlider(false)}>
//         <div className="text-center">
//           <h2 className="text-[24px]  text-left font-medium leading-[117%] tracking-[-1.5px] text-[#181375] font-['Plus Jakarta Sans']">
//             Plan Your Event, Stress-Free!
//           </h2>
//           <p className="text-[#4F4F4F] text-sm mt-2 mb-4 text-left">
//             Need décor, photography or other services? Select the services and let our experts help you.
//             <span className="text-[#9C27B0] font-medium underline cursor-pointer">
//               {" "}— no extra payment now.
//             </span>
//           </p>
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           {extraServices.map(({ label, Icon }, index) => (
//             <button
//               key={index}
//               onClick={() => toggleService(label)}
//               className={`flex flex-col items-center justify-center border rounded-xl p-4 text-sm font-medium gap-2 transition ${
//                 selectedServices.includes(label)
//                   ? "border-[#9C27B0] text-[#9C27B0]"
//                   : "border-[#D9D9D9] text-[#181818]"
//               }`}
//             >
//               <Icon size={32} weight="regular" />
//               {label}
//             </button>
//           ))}
//         </div>

// <div className="flex justify-center gap-3 mt-6">
//   <button
//     onClick={() => {
//       setSelectedServices([]);
//       setShowSlider(false);
//       navigate("/venues/continue&pay");
//     }}
//     className="text-[#6610F2] border border-[#6610F2] px-6 py-2 rounded"
//   >
//     Skip
//   </button>
//   <button
//     onClick={() => alert("Proceeding...")}
//     disabled={selectedServices.length === 0}
//     className={`px-6 py-2 rounded text-white ${
//       selectedServices.length === 0
//         ? "bg-[#D9D9D9] cursor-not-allowed"
//         : "bg-[#9C27B0] hover:brightness-110"
//     }`}
//   >
//     Continue
//   </button>
// </div>

//       </SlideOver>
//     </>
//   );
// };

// export default VenueHighlight;


import React, { useState } from "react";
import SlideOver from "./Slideover";
import { useNavigate } from "react-router-dom";

import {
  Armchair,
  Car,
  Door,
  HouseLine,
  Confetti,
  Camera,
  FilmSlate,
  MagicWand,
  HandPalm,
  MicrophoneStage,
} from "@phosphor-icons/react";

const amenities = [
  "Wi-Fi Access",
  "Car Parking",
  "Air Conditioning",
  "Seating Arrangements",
  "Catering Services",
  "Kitchen Access",
  "Dining Area",
  "Stage & Podium",
  "Lighting & Decoration Setup",
  "Sound System",
  "First Aid Kits",
  "Lounge & Waiting Area",
  "Restroom & Changing Rooms",
  "Power Backup",
  "Bridal Room",
  "Outdoor Spaces",
];

const extraServices = [
  { label: "Décor", Icon: Confetti },
  { label: "Photography", Icon: Camera },
  { label: "Videography", Icon: FilmSlate },
  { label: "Makeup & Hairstyle", Icon: MagicWand },
  { label: "Mehndi", Icon: HandPalm },
  { label: "Entertainment", Icon: MicrophoneStage },
];

const VenueHighlight = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 py-10 bg-white font-['Plus_Jakarta_Sans'] flex flex-col lg:flex-row gap-6">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div>
            <h2 className="text-[#181375] text-2xl md:text-3xl font-semibold tracking-[-0.4px]">
              Venue Highlights
            </h2>
            <p className="text-[#4F4F4F] text-sm md:text-lg mt-1">
              Guest Ratings <span className="text-yellow-400">★</span> 4.5
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm items-center">
            <span className="text-gray-500">Venue Best for:</span>
            {[
              "Wedding",
              "Birthday Party",
              "Corporate Events",
              "Family Celebrations",
              "Baby Shower",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-gray-400 rounded-full text-xs bg-[#FAFAFA] text-[#424242]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap text-sm mt-4 border-b border-gray-200 divide-x divide-gray-200">
            {[
              { label: "Hall Capacity", value: "800", Icon: Armchair },
              { label: "Parking Slots", value: "180", Icon: Car },
              { label: "Guest Rooms", value: "10", Icon: Door },
              { label: "Venue Type", value: "Indoor", Icon: HouseLine },
            ].map((item, i) => (
              <div
                key={i}
                className="w-1/2 sm:w-full py-4 px-4 flex flex-col items-center gap-1"
              >
                <span className="text-gray-500 text-xs">{item.label}</span>
                <span className="text-[#181818] font-semibold text-sm">
                  {item.value}
                </span>
                <item.Icon size={20} color="#9C27B0" weight="regular" />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[#181375] font-semibold text-lg tracking-[0.4px] mb-3">
              Amenities & Facilities
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-[#4F4F4F]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 leading-5">
                  <span className="text-lg">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full h-screen lg:w-1/3 bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">
            ₹1,00,000{" "}
            <span className="text-sm font-normal text-gray-500">per day</span>
          </h3>

          <input
            type="text"
            placeholder="Event Title"
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <select className="border border-gray-300 rounded px-4 py-2 text-sm">
            <option>Select Event Type</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <input
            type="time"
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          />

          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between">
              <span>Base Price</span>
              <span>₹2,00,000</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>₹10,000</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & GST (18%)</span>
              <span>₹19,800</span>
            </div>
            <div className="flex justify-between text-green-600 font-medium">
              <span>Special Discount</span>
              <span>-₹5,000</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-black">
              <span>Total Amount</span>
              <span>₹2,24,800</span>
            </div>
          </div>

          <button
            onClick={() => setShowSlider(true)}
            className="w-full text-white text-sm font-semibold rounded-md py-3 
            bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] shadow-md hover:brightness-110 transition"
          >
            Secure Your Booking
          </button>

          <p className="text-xs text-gray-500 text-center">
            *You can save up to 20% with Festal Payment Options
          </p>
          <p className="text-[11px] text-center text-[#828282]">
            Need more details about the venue?{" "}
            <span className="text-[#6610F2] underline cursor-pointer">
              Contact us before booking
            </span>
          </p>
        </div>
      </div>

      {/* SlideOver */}
      <SlideOver show={showSlider} onClose={() => setShowSlider(false)}>
        <div className="text-left">
          <h2 className="text-2xl font-medium text-[#181375] font-['Plus Jakarta Sans']">
            Plan Your Event, Stress-Free!
          </h2>
          <p className="text-[#4F4F4F] text-sm mt-2 mb-4">
            Need décor, photography or other services? Select the services and
            let our experts help you.
            <span className="text-[#9C27B0] font-medium underline cursor-pointer">
              {" "}
              — no extra payment now.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* eslint-disable-next-line no-unused-vars */}
          {extraServices.map(({ label, Icon }, index) => (
            <button
              key={index}
              onClick={() => toggleService(label)}
              className={`flex flex-col items-center justify-center border rounded-xl p-4 text-sm font-medium gap-2 transition ${
                selectedServices.includes(label)
                  ? "border-[#9C27B0] text-[#9C27B0]"
                  : "border-[#D9D9D9] text-[#181818]"
              }`}
            >
              <Icon size={32} weight="regular" />
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button
            onClick={() => {
              setSelectedServices([]);
              setShowSlider(false);
              navigate("/venues/continue&pay");
            }}
            className="text-[#6610F2] border border-[#6610F2] px-6 py-2 rounded"
          >
            Skip
          </button>
          <button
            onClick={() => alert("Proceeding...")}
            disabled={selectedServices.length === 0}
            className={`px-6 py-2 rounded text-white ${
              selectedServices.length === 0
                ? "bg-[#D9D9D9] cursor-not-allowed"
                : "bg-[#9C27B0] hover:brightness-110"
            }`}
          >
            Continue
          </button>
        </div>
      </SlideOver>
    </>
  );
};

export default VenueHighlight;
