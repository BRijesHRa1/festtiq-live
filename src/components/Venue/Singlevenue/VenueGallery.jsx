// import React from "react";
// import mainImg from '../../../assets/venue/single5.png';
// import img2 from "../../../assets/venue/single4.png";
// import img3 from "../../../assets/venue/single3.png";
// import img4 from "../../../assets/venue/single2.png";
// import img5 from "../../../assets/venue/single1.png";
// import { HiOutlinePhotograph } from "react-icons/hi";

// export default function VenueGallery() {
//   const sideImages = [img2, img3, img4, img5];

//   return (
//     <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-[20px] rounded-xl">
//         {/* Left: Main Image */}
//         <div className="w-[619px] h-[400px] overflow-hidden rounded-xl">
//           <img
//             src={mainImg}
//             alt="Main Venue"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>

//         {/* Right: 4 images grid */}
//         <div className="grid grid-cols-2 gap-[10px] w-[620px]">
//           {sideImages.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Venue ${index}`}
//               className="w-[304.5px] h-[195px] object-cover rounded-xl"
//             />
//           ))}

//           {/* Show All Button */}
//           <button className="col-span-2 mt-[10px] h-[44px] rounded-lg border border-gray-300 bg-white text-sm text-gray-700 flex items-center justify-center gap-2 hover:shadow">
//             <HiOutlinePhotograph className="text-lg" />
//             Show all photos
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import mainImg from "../../../assets/venue/single5.png";
import img2 from "../../../assets/venue/single4.png";
import img3 from "../../../assets/venue/single3.png";
import img4 from "../../../assets/venue/single2.png";
import img5 from "../../../assets/venue/single1.png";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function VenueGallery() {
  const sideImages = [img2, img3, img4, img5];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-5 rounded-xl">
        {/* Left: Main Image */}
        <div className="w-full lg:w-[60%] h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl">
          <img
            src={mainImg}
            alt="Main Venue"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right: Side Images */}
        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-3">
          {sideImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Venue ${index}`}
              className="w-full h-[140px] sm:h-[170px] lg:h-[190px] object-cover rounded-xl"
            />
          ))}

          {/* Show All Button */}
          <button className="col-span-2 mt-2 h-[44px] rounded-lg border border-gray-300 bg-white text-sm text-gray-700 flex items-center justify-center gap-2 hover:shadow">
            <HiOutlinePhotograph className="text-lg" />
            Show all photos
          </button>
        </div>
      </div>
    </div>
  );
}
