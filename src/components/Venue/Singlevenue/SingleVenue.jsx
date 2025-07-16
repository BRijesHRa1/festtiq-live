// import React from "react";
// import VenueGallery from "./VenueGallery";
// import { FiShare2, FiMapPin, FiHeart } from "react-icons/fi";

// import mainImg from "../../../assets/venue/single5.png";
// import img2 from "../../../assets/venue/single4.png";
// import img3 from "../../../assets/venue/single3.png";
// import img4 from "../../../assets/venue/single2.png";
// import img5 from "../../../assets/venue/single1.png";
// import VenueHighlight from "./VenueHighlight";
// import Rating from "./Rating";

// const SingleVenue = () => {
//   const sideImages = [img2, img3, img4, img5];

//   return (
//     <div className="w-full px-6 lg:px-24 py-10 bg-white font-['Plus_Jakarta_Sans']">
//       {/* Title + Address + Buttons */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 w-full">
//         {/* Left: Title + Address */}
//         <div className="max-w-[606px]">
//           <h1
//             className="font-['Abhaya_Libre'] text-[48px] leading-[117%] tracking-[-1.5px] font-normal text-[#181375]"
//             style={{ verticalAlign: "middle" }}
//           >
//             Diamond Mahal
//           </h1>
//           <div className="flex items-center gap-1 mt-1 text-gray-600 text-[12px] leading-[160%] tracking-[0.15px]">
//             <FiMapPin size={14} className="text-gray-500" />
//             <span>
//               No #1, Pallavaram - Thoraipakkam, 200 Feet Radial Rd, Old Pallavaram, Chennai, Tamil Nadu - 600117
//             </span>
//           </div>
//         </div>

//         {/* Right: Buttons */}
//         <div className="mt-4 lg:mt-0 flex gap-[10px] w-[411px] h-[44px]">
//           {/* Share Button */}
//          <button
//   className="w-[113px] h-[44px] px-[20px] py-[8px] flex items-center justify-center gap-[2px]
//              font-['Plus_Jakarta_Sans'] text-gray-700 text-[16px] font-semibold leading-[26px] tracking-[0.46px] 
//              border border-[#BDBDBD] rounded-xl shadow-sm hover:bg-gray-50"
// >
//   Share
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-[18px] h-[18px] ml-1"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M4 12v.01M8 12h.01M12 12h.01M16 12h.01M20 12h.01"
//     />
//   </svg>
// </button>

// <button
//   className="w-[113px] h-[44px] px-[20px] py-[8px] flex items-center shadow justify-center gap-[2px]
//              font-['Plus_Jakarta_Sans'] text-gray-700 text-[16px] font-semibold leading-[26px] tracking-[0.46px]
//              border border-[#BDBDBD] rounded-xl hover:bg-gray-50"
// >
//   Favorite
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-[18px] h-[18px] ml-1"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
//          4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 
//          14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
//          6.86-8.55 11.18L12 21z"
//     />
//   </svg>
// </button>


//           {/* View Map Button */}
//        <button
//   className="w-[145px] h-[44px] px-[20px] py-[8px] flex items-center justify-center gap-[8px]
//              font-['Plus_Jakarta_Sans'] text-white text-[16px] font-semibold leading-[26px] tracking-[0.46px]
//              rounded-md shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]
//              bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] hover:brightness-110"
// >
//   View Map
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-[18px] w-[18px]"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// </button>

//         </div>
//       </div>

//       {/* Venue Gallery */}
//       <VenueGallery mainImage={mainImg} thumbnails={sideImages} />
//       <VenueHighlight/>
//       <Rating/>
//     </div>
//   );
// };

// export default SingleVenue;


import React from "react";
import VenueGallery from "./VenueGallery";
import { FiMapPin } from "react-icons/fi";

import mainImg from "../../../assets/venue/single5.png";
import img2 from "../../../assets/venue/single4.png";
import img3 from "../../../assets/venue/single3.png";
import img4 from "../../../assets/venue/single2.png";
import img5 from "../../../assets/venue/single1.png";
import VenueHighlight from "./VenueHighlight";
import Rating from "./Rating";

const SingleVenue = () => {
  const sideImages = [img2, img3, img4, img5];

  return (
    <div className="w-full px-4 pt-[150px] sm:px-6 lg:px-24 py-10 bg-white font-['Plus_Jakarta_Sans']">
      {/* Title + Address + Buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6 w-full">
        {/* Left: Title + Address */}
        <div className="max-w-full lg:max-w-[606px]">
          <h1
            className="font-['Abhaya_Libre'] text-[32px] sm:text-[40px] lg:text-[48px] leading-[117%] tracking-[-1.5px] font-normal text-[#181375]"
            style={{ verticalAlign: "middle" }}
          >
            Diamond Mahal
          </h1>
          <div className="flex items-start gap-2 mt-2 text-gray-600 text-sm sm:text-[12px] leading-[160%] tracking-[0.15px] flex-wrap">
            <FiMapPin size={16} className="text-gray-500 mt-1" />
            <span className="max-w-[90%]">
              No #1, Pallavaram - Thoraipakkam, 200 Feet Radial Rd, Old Pallavaram, Chennai, Tamil Nadu - 600117
            </span>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto">
          {/* Share Button */}
          <button
            className="flex-1 sm:flex-none sm:w-[113px] h-[44px] px-[20px] py-[8px] flex items-center justify-center gap-[6px]
              text-gray-700 text-[16px] font-semibold leading-[26px] tracking-[0.46px] 
              border border-[#BDBDBD] rounded-xl shadow-sm hover:bg-gray-50"
          >
            Share
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v.01M8 12h.01M12 12h.01M16 12h.01M20 12h.01" />
            </svg>
          </button>

          {/* Favorite Button */}
          <button
            className="flex-1 sm:flex-none sm:w-[113px] h-[44px] px-[20px] py-[8px] flex items-center justify-center gap-[6px]
              text-gray-700 text-[16px] font-semibold leading-[26px] tracking-[0.46px]
              border border-[#BDBDBD] rounded-xl shadow hover:bg-gray-50"
          >
            Favorite
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 
                   2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 
                   5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                   11.18L12 21z"
              />
            </svg>
          </button>

          {/* View Map Button */}
          <button
            className="flex-1 sm:flex-none sm:w-[145px] h-[44px] px-[20px] py-[8px] flex items-center justify-center gap-[8px]
              text-white text-[16px] font-semibold leading-[26px] tracking-[0.46px]
              rounded-md shadow-md bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] hover:brightness-110"
          >
            View Map
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Venue Gallery */}
      <VenueGallery mainImage={mainImg} thumbnails={sideImages} />

      {/* Highlights and Ratings */}
      <VenueHighlight />
      <Rating />
    </div>
  );
};

export default SingleVenue;
