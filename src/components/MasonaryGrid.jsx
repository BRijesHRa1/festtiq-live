
import React from 'react';
import image1 from '../assets/MasonaryGrid/image (10).png';
import image2 from '../assets/MasonaryGrid/image (11).png';
import image3 from '../assets/MasonaryGrid/image (12).png';
import image4 from '../assets/MasonaryGrid/image (13).png';
import image5 from '../assets/MasonaryGrid/image (14).png';
import image6 from '../assets/MasonaryGrid/image (11).png';
import ExploreAllServicesButton from './ExportServiceButton';

const imageConfig = [
  { src: image1, width: 614, height: 297 },
  { src: image2, width: 297, height: 297 },
  { src: image3, width: 297, height: 297 },
  { src: image4, width: 297, height: 297 },
  { src: image5, width: 614, height: 297 },
  { src: image6, width: 297, height: 297 },
];

const MasonaryGrid = () => {
  return (
    <div
      className="mx-auto py-10 text-center bg-white px-4 sm:px-6 md:px-[96px]"
      style={{
        maxWidth: '1440px',
      }}
    >
      {/* Title */}
      <h2
        className="text-[32px] md:text-[40px] mb-4"
        style={{
          fontFamily: 'Abhaya Libre',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: '117%',
          letterSpacing: '-1.5px',
          textAlign: 'center',
          color: '#211C6A',
        }}
      >
        Services, Made for You
      </h2>

      {/* Description */}
      <p
        className="max-w-[800px] mx-auto mb-10"
        style={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '160%',
          letterSpacing: '0.15px',
          textAlign: 'center',
          color: '#222',
        }}
      >
        Discover a wide range of services designed to simplify your event planning journey. From
        venue bookings to curated packages—we’ve got everything you need to create unforgettable
        memories.
      </p>

      {/* Grid rows */}
      <div className="space-y-[35px]">
        {/* Desktop Rows */}
        <div className="hidden md:flex gap-[10px] justify-center">
          <img src={image1} alt="img1" style={{ width: 614, height: 297, borderRadius: 12 }} />
          <img src={image2} alt="img2" style={{ width: 297, height: 297, borderRadius: 12 }} />
          <img src={image3} alt="img3" style={{ width: 297, height: 297, borderRadius: 12 }} />
        </div>



        <div className="hidden md:flex gap-[10px] justify-center">
          <img src={image4} alt="img4" style={{ width: 297, height: 297, borderRadius: 12 }} />
          <img src={image5} alt="img5" style={{ width: 614, height: 297, borderRadius: 12 }} />
          <img src={image6} alt="img6" style={{ width: 297, height: 297, borderRadius: 12 }} />
        </div>

        {/* Mobile Grid - 2 per row */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {imageConfig.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`mobile-img-${i}`}
              className="w-full h-auto aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <ExploreAllServicesButton/>
    </div>
  );
};

export default MasonaryGrid;

