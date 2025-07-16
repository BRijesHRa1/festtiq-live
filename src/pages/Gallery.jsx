// import React from 'react';
// import { ArrowUpRight } from '@phosphor-icons/react';

// import service1 from "../assets/services/service1.png";
// import service2 from "../assets/services/service2.png";
// import service3 from "../assets/services/service3.png";
// import service4 from "../assets/services/service4.png";
// import service5 from "../assets/services/service.5.png";
// import service6 from "../assets/services/service6.png";

// export const eventsSections = [
//   {
//     title: "Weddings & Celebrations",
//     description:
//       "From intimate ceremonies to grand receptions, witness the magic of love unfold in our curated wedding venues.",
//     images: [service1, service2, service3, service4, service5, service6],
//     buttonText: "View More",
//   },
//   {
//     title: "Parties & Gatherings",
//     description:
//       "Catch a glimpse of the vibrant energy, laughter, and joy from unforgettable parties and gatherings.",
//     images: [service1, service2, service3, service4, service5, service6],
//     buttonText: "View More",
//   },
//   {
//     title: "Corporate Events",
//     description:
//       "Professional yet elegant setups for seminars, conferences, and business galas that leave a lasting impression.",
//     images: [service1, service2, service3, service4, service5, service6],
//     buttonText: "View More",
//   },
//   {
//     title: "Cultural & Entertainment shows",
//     description:
//       "Discover the grandeur and creativity of cultural programs, concerts, and entertainment events.",
//     images: [service1, service2, service3, service4, service5, service6],
//     buttonText: "View More",
//   },
//   {
//     title: "Unique Moments",
//     description:
//       "Explore customized themes and personalized setups that made every event truly one of a kind.",
//     images: [service1, service2, service3, service4, service5, service6],
//     buttonText: "View More",
//   },
// ];

// function Gallery() {
//   return (
//     <div className="max-w-[1440px] mx-auto px-4 pt-[150px] py-10 bg-white text-black">

//       {/* Intro Section */}
//       <div className="text-center max-w-3xl mx-auto mb-16 px-4">
//         <h2 className="text-[#181375] text-[28px] sm:text-[36px] md:text-[48px] font-abhaya font-medium leading-[120%] tracking-[-1.2px] mb-4">
//           Unveiling the Beauty of Cherished Celebrations
//         </h2>
//         <p className="text-[#212121] text-[16px] sm:text-[18px] leading-[160%] font-plusjakarta">
//           Discover stunning moments of our venues and services, showcasing unforgettable moments and perfect settings tailored for your event. Get inspired for your next event!
//         </p>
//         <button className="mt-6 px-6 py-2 bg-[#A259FF] text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[#8B41E6] mx-auto transition">
//           Explore All Services <ArrowUpRight size={16} />
//         </button>
//       </div>

//       {/* Section Loop */}
//       {eventsSections.map((section, index) => (
//         <div
//           key={index}
//           className="mb-20 border-[#A259FF] pl-2 sm:pl-4"
//         >
//           {/* Title */}
//           <h2 className="font-abhaya font-normal text-[32px] sm:text-[36px] md:text-[48px] leading-[117%] tracking-[-1.5px] text-left text-[#181375] py-3 rounded-md mb-2">
//             {section.title}
//           </h2>

//           {/* Description */}
//           <p className="text-gray-700 text-left text-sm mb-6">{section.description}</p>

//           {/* Responsive Grid Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
//             {section.images.map((img, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={img}
//                 alt={`${section.title} ${imgIndex + 1}`}
//                 className="rounded-lg object-cover shadow-md w-full h-[200px] sm:h-[250px] md:h-[297px]"
//               />
//             ))}
//           </div>

//           {/* View More Button */}
//           <button className="bg-purple-700 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-800 transition">
//             {section.buttonText}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Gallery;


import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

import service1 from "../assets/services/service1.png";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service3.png";
import service4 from "../assets/services/service4.png";
import service5 from "../assets/services/service.5.png";
import service6 from "../assets/services/service6.png";

const eventsSections = [
  {
    title: "Weddings & Celebrations",
    description:
      "From intimate ceremonies to grand receptions, witness the magic of love unfold in our curated wedding venues.",
    images: [service1, service2, service3, service4, service5, service6],
  },
  {
    title: "Parties & Gatherings",
    description:
      "Catch a glimpse of the vibrant energy, laughter, and joy from unforgettable parties and gatherings.",
    images: [service2, service3, service4, service5, service6, service1],
  },
  {
    title: "Corporate Events",
    description:
      "Professional yet elegant setups for seminars, conferences, and business galas that leave a lasting impression.",
    images: [service3, service4, service5, service6, service1, service2],
  },
  {
    title: "Cultural & Entertainment Shows",
    description:
      "Discover the grandeur and creativity of cultural programs, concerts, and entertainment events.",
    images: [service4, service5, service6, service1, service2, service3],
  },
  {
    title: "Unique Moments",
    description:
      "Explore customized themes and personalized setups that made every event truly one of a kind.",
    images: [service5, service6, service1, service2, service3, service4],
  },
];

export default function Gallery() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-[120px] pb-20 bg-white text-black">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-[#181375] text-[28px] sm:text-[36px] md:text-[48px] font-abhaya font-medium leading-[120%] tracking-[-1.2px] mb-4">
          Unveiling the Beauty of Cherished Celebrations
        </h2>
        <p className="text-[#212121] text-[16px] sm:text-[18px] leading-[160%] font-plusjakarta">
          Discover stunning moments of our venues and services, showcasing unforgettable moments and perfect settings tailored for your event.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#A259FF] text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[#8B41E6] mx-auto transition">
          Explore All Services <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Event Sections */}
      {eventsSections.map((section, index) => {
        const [mainImage, ...sideImages] = section.images;

        return (
          <div key={index} className="mb-20">
            <h2 className="font-abhaya font-medium text-[32px] sm:text-[36px] md:text-[40px] leading-[117%] tracking-[-1.2px] text-left text-[#181375] mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 text-left text-sm mb-6">{section.description}</p>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Large Image Left */}
              <div className="w-full lg:w-[50%] h-[400px] overflow-hidden rounded-xl">
                <img
                  src={mainImage}
                  alt={`${section.title} Main`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              {/* Right Image Grid */}
              <div className="w-full lg:w-[50%] flex flex-col gap-4">
                {/* Top 2 */}
                <div className="flex gap-4">
                  {sideImages.slice(0, 2).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Top ${idx}`}
                      className="w-1/2 h-[100px] sm:h-[130px] md:h-[150px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  ))}
                </div>

                {/* Bottom 3 */}
                <div className="flex gap-4">
                  {sideImages.slice(2, 5).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Bottom ${idx}`}
                      className="w-1/3 h-[100px] sm:h-[130px] md:h-[150px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
