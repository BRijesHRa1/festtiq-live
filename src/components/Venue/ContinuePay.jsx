


// import React from "react";
// import { CreditCard, Bank, Money, QrCode } from "@phosphor-icons/react";
// import image from "../../assets/services/service3.png";

// const ContinuePay = () => {
//   return (
//     <div className="max-w-[1200px] mt-10 mx-auto px-4 sm:px-6 py-10 bg-white font-['Plus Jakarta Sans']">
//       {/* Header */}
//       <h2 className="text-3xl sm:text-5xl font-semibold text-[#181375] mb-6">
//         Continue & Pay
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-8 items-start">
//         {/* Booking Summary Section */}
//         <div className="flex-1 w-full">
//           <h3 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-1">
//             Booking Summary
//           </h3>
//           <p className="text-sm text-[#555] mb-4">
//             You are about to confirm the following services:
//           </p>

//           <div className="space-y-2 text-sm text-[#333] mb-4">
//             <p><span className="font-medium">Venue Name:</span> MKS Mahal</p>
//             <p><span className="font-medium">Event Date:</span> March 15, 2025</p>
//             <p><span className="font-medium">Duration:</span> 2 days</p>
//             <p><span className="font-medium">Location:</span> Anna Nagar, Chennai</p>
//           </div>

//           {/* Other Services */}
//           <h4 className="text-xl sm:text-2xl py-5 font-semibold text-[#181375] mb-1">
//             Selected Other Services
//           </h4>

//           <div className="space-y-1 text-sm text-[#4F4F4F]">
//             <p>✅ Décor & Design</p>
//             <p>✅ Photography</p>
//             <p>✅ Makeup & Hairstyle</p>
//           </div>

//           <p className="text-xs text-[#828282] mt-1 mb-6">
//             Note: Our team will reach out to discuss these services.
//             <span className="text-[#9C27B0] underline cursor-pointer ml-1">
//               No Payment required now.
//             </span>
//           </p>

//           {/* Payment Option */}
//           <div className="mt-6">
//             <h4 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-2">
//               Choose Payment Option
//             </h4>
//             <div className="space-y-3 text-sm text-[#181375]">
//               <label className="flex items-start gap-2">
//                 <input type="radio" name="paymentOption" defaultChecked />
//                 <div>
//                   <p>Partial Payment (20%) - Pay ₹44,960 now</p>
//                   <p className="text-[#828282] text-xs">
//                     Rest ₹1,79,840 will be due later
//                   </p>
//                 </div>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="paymentOption" />
//                 <span>Full Payment - Pay ₹2,24,800 now</span>
//               </label>
//             </div>
//           </div>

//           {/* Payment Method */}
//           <div className="mt-6">
//             <h4 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-2">
//               Choose Payment Method
//             </h4>
//             <div className="space-y-3 text-sm text-[#181375]">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="paymentMethod" defaultChecked />
//                 <CreditCard size={20} /> Credit Card
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="paymentMethod" />
//                 <Money size={20} /> Debit Card
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="paymentMethod" />
//                 <QrCode size={20} /> UPI
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="paymentMethod" />
//                 <Bank size={20} /> Net Banking
//               </label>
//             </div>
//           </div>

//           <button className="mt-8 bg-[#9C27B0] hover:brightness-110 transition text-white font-medium px-6 py-3 rounded-md w-full sm:w-auto">
//             Book Now
//           </button>
//         </div>

//         {/* Price Summary */}
//         <div className="w-full lg:w-[340px] border border-gray-200 shadow-md rounded-xl p-4 h-fit">
//           <div className="flex gap-4 items-start">
//             <img
//               src={image}
//               alt="Venue"
//               className="rounded-lg w-[60px] h-[60px] object-cover"
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-[#181375]">
//                 Diamond Mahal
//               </h4>
//               <p className="text-xs text-[#828282]">Chennai</p>
//               <p className="text-xs text-[#FFA500]">★ 4.5 · 103 Reviews</p>
//             </div>
//           </div>

//           <h5 className="mt-4 mb-2 text-sm font-semibold">Price Details</h5>

//           <div className="text-sm text-[#333] space-y-2">
//             <div className="flex justify-between">
//               <span>Base Price × 2 days</span>
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
//             <div className="flex justify-between text-green-600">
//               <span>Special Discount</span>
//               <span>-₹5,000</span>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between font-bold text-black">
//               <span>Total Amount</span>
//               <span>₹2,24,800</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContinuePay;


import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Bank, Money, QrCode } from "@phosphor-icons/react";
import image from "../../assets/services/service3.png";

import { useState } from "react";
import BookingSuccessModal from "./BookingSuccessModal.JSX";

const ContinuePay = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mt-10 mx-auto px-4 sm:px-6 py-10 bg-white font-['Plus Jakarta Sans']">
      {/* Back Button */}
     <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} weight="bold" className="text-[#181375]" />
        <h2 className="text-2xl sm:text-5xl font-semibold text-[#181375]">Continue & Pay</h2>
      </div>

      {/* Header */}
    
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Booking Summary Section */}
        <div className="flex-1 w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-1">
            Booking Summary
          </h3>
          <p className="text-sm text-[#555] mb-4">
            You are about to confirm the following services:
          </p>

          <div className="space-y-2 text-sm text-[#333] mb-4">
            <p><span className="font-medium">Venue Name:</span> MKS Mahal</p>
            <p><span className="font-medium">Event Date:</span> March 15, 2025</p>
            <p><span className="font-medium">Duration:</span> 2 days</p>
            <p><span className="font-medium">Location:</span> Anna Nagar, Chennai</p>
          </div>

          {/* Other Services */}
          <h4 className="text-xl sm:text-2xl py-5 font-semibold text-[#181375] mb-1">
            Selected Other Services
          </h4>

          <div className="space-y-1 text-sm text-[#4F4F4F]">
            <p>✅ Décor & Design</p>
            <p>✅ Photography</p>
            <p>✅ Makeup & Hairstyle</p>
          </div>

          <p className="text-xs text-[#828282] mt-1 mb-6">
            Note: Our team will reach out to discuss these services.
            <span className="text-[#9C27B0] underline cursor-pointer ml-1">
              No Payment required now.
            </span>
          </p>

          {/* Payment Option */}
          <div className="mt-6">
            <h4 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-2">
              Choose Payment Option
            </h4>
            <div className="space-y-3 text-sm text-[#181375]">
              <label className="flex items-start gap-2">
                <input type="radio" name="paymentOption" defaultChecked />
                <div>
                  <p>Partial Payment (20%) - Pay ₹44,960 now</p>
                  <p className="text-[#828282] text-xs">
                    Rest ₹1,79,840 will be due later
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentOption" />
                <span>Full Payment - Pay ₹2,24,800 now</span>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h4 className="text-xl sm:text-2xl font-semibold text-[#181375] mb-2">
              Choose Payment Method
            </h4>
            <div className="space-y-3 text-sm text-[#181375]">
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" defaultChecked />
                <CreditCard size={20} /> Credit Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" />
                <Money size={20} /> Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" />
                <QrCode size={20} /> UPI
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" />
                <Bank size={20} /> Net Banking
              </label>
            </div>
          </div>

     <button
  onClick={() => setShowSuccessModal(true)}
  className="mt-8 text-white text-sm font-semibold rounded 
             px-[20px] py-[8px] w-[123px] h-[44px]
             bg-gradient-to-b from-[#9C27B0] to-[#7B1FA2]
             shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]
             hover:brightness-110 transition"
>
  Book Now
</button>


        </div>

        {/* Price Summary */}
        <div className="w-full lg:w-[340px] border border-gray-200 shadow-md rounded-xl p-4 h-fit">
          <div className="flex gap-4 items-start">
            <img
              src={image}
              alt="Venue"
              className="rounded-lg w-[60px] h-[60px] object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold text-[#181375]">
                Diamond Mahal
              </h4>
              <p className="text-xs text-[#828282]">Chennai</p>
              <p className="text-xs text-[#FFA500]">★ 4.5 · 103 Reviews</p>
            </div>
          </div>

          <h5 className="mt-4 mb-2 text-sm font-semibold">Price Details</h5>

          <div className="text-sm text-[#333] space-y-2">
            <div className="flex justify-between">
              <span>Base Price × 2 days</span>
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
            <div className="flex justify-between text-green-600">
              <span>Special Discount</span>
              <span>-₹5,000</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-black">
              <span>Total Amount</span>
              <span>₹2,24,800</span>
            </div>
          </div>
        </div>
      </div>
      <BookingSuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />

    </div>
  );
};

export default ContinuePay;
