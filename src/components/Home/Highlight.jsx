import React from 'react';
import gallerybackground from '../../assets/gallery/gallerybackground.png';
import { ArrowUpRight } from 'lucide-react';

const GallerySection = () => {
  return (
    <div className="w-full flex justify-center my-2 relative px-1 sm:px-6 md:px-0">
      {/* Background Image Wrapper */}
      <div
        className="w-full max-w-[1440px] relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px]"
      >
        {/* Background Image */}
        <img
          src={gallerybackground}
          alt="Gallery Background"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Glass Effect Card */}
        <div
          className="
            absolute
            flex flex-col items-center justify-center text-center
            px-6 sm:px-12 md:px-20
            py-8 sm:py-12
            rounded-[20px]
            border-[4px]
            border-transparent
            backdrop-blur-[20px]
            bg-gradient-to-br from-[#9C27B059] to-[#7B1FA259]
            shadow-lg
            z-10
            w-[90%] max-w-[776px]
          "
          style={{
            borderImageSource: 'linear-gradient(250.6deg, #9C27B0 5.62%, #7B1FA2 95.85%)',
            borderImageSlice: 1,
          }}
        >
          <h2
            className="text-white font-[400] text-[28px] sm:text-[36px] md:text-[48px] leading-[117%] tracking-[-1.5px] font-['Abhaya Libre']"
          >
            Explore Event Highlights
          </h2>

          <p
            className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] tracking-[0.15px] font-['Plus Jakarta Sans'] mt-4 max-w-[616px]"
          >
            From elegant setups to lively crowds, our gallery reflects the{' '}
            <span className="text-[#B9AFFF] font-medium">dedication</span> we bring to every event.
          </p>

          {/* Button */}
          <button
            className="mt-6 flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#7B1FA2] font-semibold text-sm hover:bg-gray-100 transition"
          >
            Explore Gallery
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
