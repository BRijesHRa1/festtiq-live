import React, { useState } from "react";

const LoginModal = ({ show, onClose, onContinue }) => {
  const [phone, setPhone] = useState("");

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(1px)",
        WebkitBackdropFilter: "blur(1px)",
      }}
    >
      <div
   className="bg-white relative flex flex-col items-center shadow-xl w-[90%] max-w-[700px] h-auto md:h-[576px] rounded-[24px] px-[30px] py-[60px] gap-[40px]"

        // style={{
        //   width: "700px",
        //   height: "576px",
        //   borderRadius: "24px",
        //   padding: "60px 30px",
        //   gap: "40px",
        // }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black text-xl"
        >
          ×
        </button>

       <div
  className="flex flex-col items-center w-full gap-6 rounded-[12px] max-w-[400px] md:h-[384px]"
>

          <h2
            className="text-center"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "133%",
            }}
          >
            Log in or Sign up
          </h2>

          {/* Phone Input */}
          <div className="w-full text-left">
            <label className="text-sm font-medium">Phone Number*</label>
            <div className="flex gap-2 mt-1">
              <select className="border rounded p-2 w-1/4">
                <option value="IN">IN</option>
              </select>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="border rounded p-2 w-3/4"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              We'll send you a code to confirm your number
            </p>
          </div>

          {/* Continue Button */}
          {phone ? (
            <button
              className="w-full text-white"
              style={{
                backgroundColor: "#8F24AB",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                height: "44px",
                padding: "12px 20px",
                borderRadius: "4px",
              }}
              onClick={() => {
                onClose();
                onContinue(phone);
              }}
            >
              Continue
            </button>
          ) : (
            <button
              className="w-full text-gray-500 cursor-not-allowed"
              disabled
              style={{
                backgroundColor: "#E0E0E0",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                height: "44px",
                padding: "12px 20px",
                borderRadius: "4px",
              }}
            >
              Continue
            </button>
          )}

          {/* Divider */}
          <div className="flex items-center w-full text-sm text-gray-400">
            <div className="flex-1 border-t border-gray-300" />
            <span className="px-2">OR</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-2 w-full">
            {["Google", "Facebook", "Apple"].map((provider) => (
              <button
                key={provider}
                className="w-full flex items-center justify-center gap-2 border rounded"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  height: "44px",
                  padding: "12px 20px",
                }}
              >
                <span>Continue with {provider}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
