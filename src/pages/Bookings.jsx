// import React from "react";
// import {
//   ArrowLeft,
//   CalendarBlank,
//   MapPin,
//   Buildings,
//   Clock,
//   PaperPlaneTilt,
// } from "@phosphor-icons/react";
// import image from "../assets/services/service3.png";
// import { useNavigate } from "react-router-dom";

// const Bookings = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="font-['Plus Jakarta Sans'] bg-white min-h-screen py-6 px-4 sm:px-10 flex flex-col items-center">
//       {/* Back Button */}
//       <div
//         className="self-start mb-4 flex items-center text-[#181375] gap-2 cursor-pointer"
//         onClick={() => navigate(-1)}
//       >
//         <ArrowLeft size={20} />
//         <span className="text-sm font-medium">Back</span>
//       </div>

//       {/* Alert */}
//       <p className="text-sm text-center bg-[#F3E5F5] text-[#9C27B0] rounded-md py-2 px-4 font-medium mb-6">
//         📞 For Food Waste Management – Call Toll-Free number 1800–123–4567
//       </p>

//       {/* Heading */}
//       <h2 className="text-2xl sm:text-3xl font-semibold text-[#181375] mb-2 text-center">
//         Upcoming Events
//       </h2>
//       <p className="text-[#4F4F4F] mb-6 text-sm text-center">
//         Keep track of your upcoming bookings
//       </p>

//       {/* Booking Card */}
//       <div className="bg-white border border-[#E0E0E0] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)] rounded-xl px-6 py-6 gap-5 w-[800px] h-[444px]">
//         {/* Card Header */}
//         <div className="flex justify-between items-start gap-6">
//           <div className="flex gap-4">
//             <img
//               src={image}
//               alt="Venue"
//               className="w-[190px] h-[150px] object-cover rounded-lg"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-xs text-[#9C27B0] font-medium mb-1">Booking ID: #12345</p>
//               <h3 className="text-lg font-semibold text-[#181375] leading-5">
//                 Priya weds Arjun
//               </h3>
//               <p className="text-sm text-[#555] mt-1">Wedding Reception</p>
//             </div>
//           </div>
//           <span className="text-sm text-orange-500 font-semibold whitespace-nowrap mt-2">
//             ● Partially Paid
//           </span>
//         </div>

//         {/* Divider */}
//         <div className="my-4 border-t border-gray-200"></div>

//         {/* Event Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-[#181818]">
//           <div className="flex items-center gap-2">
//             <CalendarBlank size={18} color="#9C27B0" />
//             <span>25/03 - 27/03, 2025</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock size={18} color="#9C27B0" />
//             <span>Full day</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Buildings size={18} color="#9C27B0" />
//             <span>KMS Mahal</span>
//           </div>
//         </div>

//         {/* Location Row */}
//         <div className="flex justify-between items-start text-sm text-[#4F4F4F] mb-4">
//           <div className="flex gap-2 items-start">
//             <MapPin size={18} />
//             <p className="max-w-[550px]">
//               No.41, Palavaram – Thoraipakkam, 200 Feet Radial Rd, Old Palavaram, Chennai, Tamil Nadu - 600117
//             </p>
//           </div>
//           <button
//             className="w-[44px] h-[44px] p-[10px] rounded-[8px] bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center"
//           >
//             <PaperPlaneTilt size={20} className="text-white" />
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="my-4 border-t border-gray-200"></div>

//         {/* Status Timeline */}
//         <div className="flex items-center justify-between mt-6 px-2 relative">
//           {/* Timeline line */}
//           <div className="absolute top-3 left-10 right-10 h-[2px] bg-[#E0E0E0] z-0"></div>

//           {/* Step 1 */}
//           <div className="flex flex-col items-center z-10 w-1/3">
//             <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
//               ✓
//             </div>
//             <p className="text-[13px] font-semibold text-[#181375] mt-2">Booked On</p>
//             <p className="text-xs text-[#555]">30/01/2025</p>
//           </div>

//           {/* Step 2 */}
//           <div className="flex flex-col items-center z-10 w-1/3">
//             <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
//               2
//             </div>
//             <p className="text-[13px] font-semibold text-[#181375] mt-2">Booking Confirmed</p>
//             <p className="text-xs text-[#555]">30/01/2025</p>
//           </div>

//           {/* Step 3 */}
//           <div className="flex flex-col items-center z-10 w-1/3">
//             <div className="w-6 h-6 rounded-full bg-[#BDBDBD] flex items-center justify-center text-white text-xs font-bold">
//               3
//             </div>
//             <p className="text-[13px] font-semibold text-[#181375] mt-2">Final Payment</p>
//             <p className="text-xs text-[#555]">Due: 20/03/2025</p>
//           </div>
//         </div>
//       </div>



//       {/* confirmed */}

//       <div className="bg-white border border-[#E0E0E0] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)] rounded-xl px-6 py-6 gap-5 w-[800px] mt-8">
//   {/* Card Header */}
//   <div className="flex justify-between items-start gap-6">
//     <div className="flex gap-4">
//       <img
//         src={image}
//         alt="Venue"
//         className="w-[190px] h-[150px] object-cover rounded-lg"
//       />
//       <div className="flex flex-col justify-center">
//         <p className="text-xs text-[#9C27B0] font-medium mb-1">Booking ID: #12346</p>
//         <h3 className="text-lg font-semibold text-[#181375] leading-5">
//           Priya weds Arjun
//         </h3>
//         <p className="text-sm text-[#555] mt-1">Wedding Reception</p>
//       </div>
//     </div>
//     <span className="text-sm text-green-600 font-semibold whitespace-nowrap mt-2">
//       ● Confirmed
//     </span>
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* Event Info Row */}
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-[#181818]">
//     <div className="flex items-center gap-2">
//       <CalendarBlank size={18} color="#9C27B0" />
//       <span>25/03 - 27/03, 2025</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <Clock size={18} color="#9C27B0" />
//       <span>Full day 1</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <Buildings size={18} color="#9C27B0" />
//       <span>KMS Mahal</span>
//     </div>
//   </div>

//   {/* Location Row */}
//   <div className="flex justify-between items-start text-sm text-[#4F4F4F] mb-4">
//     <div className="flex gap-2 items-start">
//       <MapPin size={18} />
//       <p className="max-w-[550px]">
//         No.41, Palavaram – Thoraipakkam, 200 Feet Radial Rd, Old Palavaram, Chennai, Tamil Nadu - 600117
//       </p>
//     </div>
//     <button
//       className="w-[44px] h-[44px] p-[10px] rounded-[8px] bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center"
//     >
//       <PaperPlaneTilt size={20} className="text-white" />
//     </button>
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* View Invoice Button */}
//   <div className="flex justify-start">
//     <button className="border border-[#9C27B0] text-[#9C27B0] font-medium px-5 py-2 rounded-md text-sm hover:bg-[#F3E5F5] transition-all">
//       View Invoice
//     </button>
//   </div>
// </div>


// {/* Requested servcices */}

// <div className="bg-white border border-[#E0E0E0] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)] rounded-xl px-6 py-6 gap-5 w-[800px] mt-8">
//   {/* Header Row */}
//   <div className="flex justify-between items-center mb-4">
//     <h3 className="text-lg font-semibold text-[#181375]">Requested Services</h3>
//     <span className="text-sm text-green-600 font-semibold whitespace-nowrap">
//       ● Confirmed
//     </span>
//   </div>

//   {/* Tags */}
//   <div className="flex flex-wrap gap-2 mb-4">
//     {[
//       "Décor",
//       "Photography",
//       "Videography",
//       "Makeup & Hairstyling",
//       "Mehndi",
//       "Entertainment",
//     ].map((tag, index) => (
//       <span
//         key={index}
//         className="px-3 py-1 text-sm border border-gray-300 rounded-full text-[#181375] bg-white whitespace-nowrap"
//       >
//         {tag}
//       </span>
//     ))}
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* Progress Timeline */}
//   <div className="flex justify-between text-center text-sm text-[#4F4F4F]">
//     {/* Step 1 */}
//     <div className="flex flex-col items-center w-1/3">
//       <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
//         ✓
//       </div>
//       <p className="text-[13px] font-medium text-[#333] mt-2">Request Sent</p>
//       <p className="text-xs text-[#555]">30/01/2025</p>
//     </div>

//     {/* Step 2 */}
//     <div className="flex flex-col items-center w-1/3">
//       <div className="w-6 h-6 rounded-full bg-[#BDBDBD] flex items-center justify-center text-white text-xs font-bold">
//         2
//       </div>
//       <p className="text-[13px] font-medium text-[#333] mt-2">Follow-Up</p>
//       <p className="text-xs text-[#555]">DD/MM/YYYY</p>
//     </div>

//     {/* Step 3 */}
//     <div className="flex flex-col items-center w-1/3">
//       <div className="w-6 h-6 rounded-full bg-[#BDBDBD] flex items-center justify-center text-white text-xs font-bold">
//         3
//       </div>
//       <p className="text-[13px] font-medium text-[#333] mt-2">Final Payment</p>
//       <p className="text-xs text-[#555]">DD/MM/YYYY</p>
//     </div>
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* Action Buttons */}
//   <div className="flex justify-start gap-4">
//     <button className="border border-[#9C27B0] text-[#9C27B0] font-medium px-5 py-2 rounded-md text-sm hover:bg-[#F3E5F5] transition-all">
//       Edit Request
//     </button>
//     <button className="bg-[#9C27B0] text-white font-medium px-5 py-2 rounded-md text-sm hover:brightness-110 transition-all">
//       Contact Us
//     </button>
//   </div>
// </div>


// {/* Completed */}

// <div className="bg-white border border-[#E0E0E0] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)] rounded-xl px-6 py-6 gap-5 w-[800px] mt-8">
//   {/* Header */}
//   <div className="flex justify-between items-start gap-6">
//     <div className="flex gap-4">
//       <img
//         src={image} // Replace with actual image import or URL
//         alt="Venue"
//         className="w-[190px] h-[150px] object-cover rounded-lg"
//       />
//       <div className="flex flex-col justify-center">
//         <p className="text-xs text-[#9C27B0] font-medium mb-1">Booking ID: #12345</p>
//         <h3 className="text-lg font-semibold text-[#181375] leading-5">Rakshana</h3>
//         <p className="text-sm text-[#555] mt-1">Birthday Party</p>
//       </div>
//     </div>
//     <span className="text-sm text-green-600 font-semibold whitespace-nowrap mt-2">
//       ● Completed
//     </span>
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* Event Details */}
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-[#181818]">
//     <div className="flex items-center gap-2">
//       <CalendarBlank size={18} color="#9C27B0" />
//       <span>02/02/2025</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <Clock size={18} color="#9C27B0" />
//       <span>Evening</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <Buildings size={18} color="#9C27B0" />
//       <span>Grand Palace</span>
//     </div>
//   </div>

//   {/* Location Row */}
//   <div className="flex justify-between gap-2 text-sm text-[#4F4F4F] mb-4 items-start">
//     <div className="flex gap-2">
//       <MapPin size={18} />
//       <p>
//         No.41, Palavaram – Thoraipakkam, 200 Feet Radial Rd, Old Palavaram, Chennai,
//         Tamil Nadu - 600117
//       </p>
//     </div>
//     <button
//       className="w-[44px] h-[44px] p-[10px] rounded-[8px] bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center"
//     >
//       <PaperPlaneTilt size={20} className="text-white cursor-pointer mt-1" />
//     </button>
//   </div>

//   {/* Divider */}
//   <div className="my-4 border-t border-gray-200"></div>

//   {/* Buttons */}
//   <div className="flex justify-start gap-4">
//     <button className="border border-[#9C27B0] text-[#9C27B0] font-medium px-5 py-2 rounded-md text-sm hover:bg-[#F3E5F5] transition-all">
//       View Invoice
//     </button>
//     <button className="bg-[#9C27B0] text-white font-medium px-5 py-2 rounded-md text-sm hover:brightness-110 transition-all">
//       Leave Review
//     </button>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Bookings;


import React from "react";
import {
  ArrowLeft,
  CalendarBlank,
  MapPin,
  Buildings,
  Clock,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import image from "../assets/services/service3.png"; // Replace with your image
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();

  return (
    <div className="font-['Plus Jakarta Sans'] pt-[100px] bg-[#FAFAFA] min-h-screen py-6 px-4 sm:px-6 lg:px-10 flex flex-col items-center">
      {/* Back Button */}
      <div
        className="self-start mb-4 flex items-center text-[#181375] gap-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Alert */}
      <p className="text-sm text-center bg-[#F3E5F5] text-[#9C27B0] rounded-md py-2 px-4 font-medium mb-6">
        📞 For Food Waste Management – Call Toll-Free number 1800–123–4567
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#181375] mb-2 text-center">
        Upcoming Events
      </h2>
      <p className="text-[#4F4F4F] mb-6 text-sm text-center">
        Keep track of your upcoming bookings
      </p>

      {/* Booking Cards */}
      {["Partially Paid", "Confirmed", "Requested Services", "Completed"].map((status, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 shadow-md rounded-xl w-full max-w-[740px] p-4 sm:p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={image}
                alt="Venue"
                className="w-full sm:w-[120px] h-[120px] object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <p className="text-xs text-[#9C27B0] font-medium mb-1">
                  Booking ID: #{12345 + i}
                </p>
                <h3 className="text-lg font-semibold text-[#181375] leading-5">
                  {status === "Completed" ? "Rakshana" : "Priya weds Arjun"}
                </h3>
                <p className="text-sm text-[#555] mt-1">
                  {status === "Completed" ? "Birthday Party" : "Wedding Reception"}
                </p>
              </div>
            </div>
            <span className="text-sm text-[#4F4F4F] font-medium ml-auto mt-2 sm:mt-0 flex items-center gap-1">
              <span className={`w-2 h-2 ${status === "Partially Paid" ? "bg-orange-500" : "bg-green-500"} rounded-full`}></span>
              {status}
            </span>
          </div>

          <div className="my-4 border-t border-gray-200"></div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-[#181818]">
            <div className="flex items-center gap-2">
              <CalendarBlank size={18} color="#9C27B0" />
              <span>
                {status === "Completed" ? "02/02/2025" : "25/03 - 27/03, 2025"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} color="#9C27B0" />
              <span>{status === "Completed" ? "Evening" : "Full day"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Buildings size={18} color="#9C27B0" />
              <span>Grand Palace</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-[#4F4F4F] mb-4 items-start">
            <div className="flex gap-2">
              <MapPin size={18} />
              <p className="max-w-full sm:max-w-[550px]">
                No.41, Palavaram – Thoraipakkam, 200 Feet Radial Rd, Old
                Palavaram, Chennai, Tamil Nadu - 600117
              </p>
            </div>
            <button className="w-[44px] h-[44px] p-[10px] rounded-[8px] bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center">
              <PaperPlaneTilt size={20} className="text-white" />
            </button>
          </div>

          {status === "Requested Services" ? (
            <>
              <div className="my-4 border-t border-gray-200"></div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Décor", "Photography", "Videography", "Makeup", "Mehndi"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-full text-[#181375] bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="border border-[#9C27B0] text-[#9C27B0] font-medium px-5 py-2 rounded-md text-sm hover:bg-[#F3E5F5] transition-all">
                  Edit Request
                </button>
                <button className="bg-[#9C27B0] text-white font-medium px-5 py-2 rounded-md text-sm hover:brightness-110 transition-all">
                  Contact Us
                </button>
              </div>
            </>
          ) : status === "Completed" ? (
            <>
              <div className="my-4 border-t border-gray-200"></div>
              <div className="flex gap-4">
                <button className="border border-[#9C27B0] text-[#9C27B0] font-medium px-5 py-2 rounded-md text-sm hover:bg-[#F3E5F5] transition-all">
                  View Invoice
                </button>
                <button className="bg-[#9C27B0] text-white font-medium px-5 py-2 rounded-md text-sm hover:brightness-110 transition-all">
                  Leave Review
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 border-t border-gray-200"></div>
              <div className="flex items-center justify-between mt-6 px-2 relative">
                <div className="absolute top-3 left-10 right-10 h-[2px] bg-[#E0E0E0] z-0"></div>
                <div className="flex flex-col items-center z-10 w-1/3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <p className="text-[13px] font-semibold text-[#181375] mt-2">Booked On</p>
                  <p className="text-xs text-[#555]">30/01/2025</p>
                </div>
                <div className="flex flex-col items-center z-10 w-1/3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <p className="text-[13px] font-semibold text-[#181375] mt-2">Booking Confirmed</p>
                  <p className="text-xs text-[#555]">30/01/2025</p>
                </div>
                <div className="flex flex-col items-center z-10 w-1/3">
                  <div className="w-6 h-6 rounded-full bg-[#BDBDBD] flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <p className="text-[13px] font-semibold text-[#181375] mt-2">Final Payment</p>
                  <p className="text-xs text-[#555]">Due: 20/03/2025</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Bookings;
