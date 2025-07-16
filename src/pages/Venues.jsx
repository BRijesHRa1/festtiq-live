// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import event1 from "../assets/venue/image (11).png";
// import event2 from "../assets/venue/image (12).png";
// import event3 from "../assets/venue/image (13).png";
// import event4 from "../assets/venue/image (14).png";

// import EventModal from "../components/Venue/EventModal";
// import BudgetModal from "../components/Venue/BudgetModal";
// import HallSizeModal from "../components/Venue/HallSize";
// import { HiAdjustmentsVertical } from "react-icons/hi2";

// const venueData = [
//   {
//     id: 1,
//     title: "Diamond Mahal",
//     image: event1,
//     location: "Anna Nagar, Chennai",
//     tags: ["800 Capacity", "10 Rooms", "Indoor"],
//     price: "1,00,000",
//     rating: 5.0,
//     badge: "Most Viewed",
//   },
//   {
//     id: 2,
//     title: "MKS Mahal",
//     image: event2,
//     location: "Anna Nagar, Chennai",
//     tags: ["400 Capacity", "5 Rooms", "Indoor"],
//     price: "1,00,000",
//     rating: 5.0,
//   },
//   {
//     id: 3,
//     title: "MKS Mahal",
//     image: event3,
//     location: "Anna Nagar, Chennai",
//     tags: ["400 Capacity", "5 Rooms", "Indoor"],
//     price: "1,00,000",
//     rating: 5.0,
//   },
//   {
//     id: 4,
//     title: "MKS Mahal",
//     image: event4,
//     location: "Anna Nagar, Chennai",
//     tags: ["400 Capacity", "5 Rooms", "Indoor"],
//     price: "1,00,000",
//     rating: 5.0,
//   },
// ];

// const filterOptions = ["Localities", "Event Type", "Budget", "Hall Size"];

// export default function Venues() {
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [showBudgetModal, setShowBudgetModal] = useState(false);
//   const [showHallSizeModal, setShowHallSizeModal] = useState(false);

//   const navigate = useNavigate();

//   const handleFilterClick = (filter) => {
//     if (filter === "Event Type") setShowEventModal(true);
//     else if (filter === "Budget") setShowBudgetModal(true);
//     else if (filter === "Hall Size") setShowHallSizeModal(true);
//   };

//   return (
//     <div className="w-full px-6 lg:px-24 py-10 bg-[#f9f9f9] font-[Plus_Jakarta_Sans]">
//       {/* Header + Filters */}
//       <div className="flex justify-between items-center pb-6">
//         <h2 className="text-[35px] font-abhaya font-normal leading-[117%] tracking-[-0.09375em] text-[#181375] text-center">
//           Refined &nbsp; Results
//         </h2>

//         <div className="flex gap-4">
//           {filterOptions.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => handleFilterClick(filter)}
//               className="w-[145px] h-[44px] flex items-center justify-center gap-2 border border-gray-300 rounded-md bg-white 
//               text-md font-semibold text-gray-600 font-['Plus_Jakarta_Sans'] leading-[26px] tracking-[0.46px]"
//             >
//               {filter}
//               <HiAdjustmentsVertical className="text-gray-600 text-lg" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Venue Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {venueData.map((venue) => (
//           <div
//             key={venue.id}
//             className="rounded-xl bg-white border border-[#E0E0E0] shadow-md w-full max-w-[297px] h-[348px] overflow-hidden"
//           >
//             <div className="relative">
//               <img
//                 src={venue.image}
//                 alt={venue.title}
//                 className="w-full h-[200px] object-cover rounded-t-xl"
//               />
//               {venue.badge && (
//                 <span
//                   onClick={() => navigate("/venues/mostviewed")}
//                   className="absolute top-2 left-2 bg-white text-[10px] font-medium px-2 py-1 rounded-full shadow-sm cursor-pointer hover:underline"
//                 >
//                   👑 {venue.badge}
//                 </span>
//               )}
//               <span className="absolute top-2 right-2 text-xl text-gray-600 cursor-pointer">🤍</span>
//             </div>

//             <div className="px-4 pt-2">
//               <div className="flex justify-between items-center font-semibold text-lg">
//                 <span>{venue.title}</span>
//                 <div className="flex items-center text-yellow-500 text-sm gap-1">
//                   <span>⭐</span>
//                   <span className="font-medium">{venue.rating.toFixed(1)}</span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500">{venue.location}</p>
//               <div className="flex gap-2 mt-2 flex-wrap text-xs text-gray-700">
//                 {venue.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-2 py-[2px] bg-gray-100 border border-gray-300 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="pt-2 text-md font-bold text-black">
//                 ₹{venue.price}{" "}
//                 <span className="text-sm font-normal text-gray-500">Per Day</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modals */}
//       {showEventModal && <EventModal onClose={() => setShowEventModal(false)} />}
//       {showBudgetModal && <BudgetModal onClose={() => setShowBudgetModal(false)} />}
//       {showHallSizeModal && <HallSizeModal onClose={() => setShowHallSizeModal(false)} />}
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import event1 from "../assets/venue/image (11).png";
import event2 from "../assets/venue/image (12).png";
import event3 from "../assets/venue/image (13).png";
import event4 from "../assets/venue/image (14).png";

import EventModal from "../components/Venue/EventModal";
import BudgetModal from "../components/Venue/BudgetModal";
import HallSizeModal from "../components/Venue/HallSize";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const venueData = [
  {
    id: 1,
    title: "Diamond Mahal",
    image: event1,
    location: "Anna Nagar, Chennai",
    tags: ["800 Capacity", "10 Rooms", "Indoor"],
    price: "1,00,000",
    rating: 5.0,
    badge: "Most Viewed",
  },
  {
    id: 2,
    title: "MKS Mahal",
    image: event2,
    location: "Anna Nagar, Chennai",
    tags: ["400 Capacity", "5 Rooms", "Indoor"],
    price: "1,00,000",
    rating: 5.0,
  },
  {
    id: 3,
    title: "MKS Mahal",
    image: event3,
    location: "Anna Nagar, Chennai",
    tags: ["400 Capacity", "5 Rooms", "Indoor"],
    price: "1,00,000",
    rating: 5.0,
  },
  {
    id: 4,
    title: "MKS Mahal",
    image: event4,
    location: "Anna Nagar, Chennai",
    tags: ["400 Capacity", "5 Rooms", "Indoor"],
    price: "1,00,000",
    rating: 5.0,
  },
];

const filterOptions = ["Localities", "Event Type", "Budget", "Hall Size"];

export default function Venues() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showHallSizeModal, setShowHallSizeModal] = useState(false);

  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    if (filter === "Event Type") setShowEventModal(true);
    else if (filter === "Budget") setShowBudgetModal(true);
    else if (filter === "Hall Size") setShowHallSizeModal(true);
  };

  return (
    <div className="w-full pt-[150px]  px-4 sm:px-6 lg:px-24 py-8 bg-[#f9f9f9] font-[Plus_Jakarta_Sans]">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6">
        <h2 className="text-2xl sm:text-[28px] lg:text-[35px] font-abhaya font-normal leading-[117%] tracking-[-0.09375em] text-[#181375]">
          Refined Results
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className="w-full sm:w-[140px] h-[42px] flex items-center justify-center gap-2 border border-gray-300 rounded-md bg-white 
              text-sm sm:text-md font-semibold text-gray-600 font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[0.46px]"
            >
              {filter}
              <HiAdjustmentsVertical className="text-gray-600 text-lg" />
            </button>
          ))}
        </div>
      </div>

      {/* Venue Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {venueData.map((venue) => (
          <div
            key={venue.id}
            className="rounded-xl bg-white border border-[#E0E0E0] shadow-md w-full max-w-full sm:max-w-[297px] h-[360px] overflow-hidden mx-auto"
          >
            <div className="relative">
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
              {venue.badge && (
                <span
                  onClick={() => navigate("/venues/mostviewed")}
                  className="absolute top-2 left-2 bg-white text-[10px] font-medium px-2 py-1 rounded-full shadow-sm cursor-pointer hover:underline"
                >
                  👑 {venue.badge}
                </span>
              )}
              <span className="absolute top-2 right-2 text-xl text-gray-600 cursor-pointer">
                🤍
              </span>
            </div>

            <div className="px-4 pt-2 pb-3">
              <div className="flex justify-between items-center font-semibold text-lg">
                <span className="text-[15px] sm:text-[16px]">{venue.title}</span>
                <div className="flex items-center text-yellow-500 text-sm gap-1">
                  <span>⭐</span>
                  <span className="font-medium">{venue.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">{venue.location}</p>
              <div className="flex gap-2 mt-2 flex-wrap text-xs text-gray-700">
                {venue.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-[2px] bg-gray-100 border border-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-md font-bold text-black">
                ₹{venue.price}{" "}
                <span className="text-sm font-normal text-gray-500">Per Day</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {showEventModal && <EventModal onClose={() => setShowEventModal(false)} />}
      {showBudgetModal && <BudgetModal onClose={() => setShowBudgetModal(false)} />}
      {showHallSizeModal && <HallSizeModal onClose={() => setShowHallSizeModal(false)} />}
    </div>
  );
}

