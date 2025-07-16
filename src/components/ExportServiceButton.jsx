import React from "react";
import { ArrowUpRight } from "lucide-react";

const ExploreAllServicesButton = () => {
  return (
    <button
      className="flex items-center mt-4 justify-center gap-2 text-white font-medium text-[16px] leading-[20px] mx-auto"
      style={{
        width: 225,
        height: 44,
        padding: '8px 20px',
        borderRadius: '4px',
        background: 'linear-gradient(180deg, #9C27B0 0%, #7B1FA2 100%)',
      }}
    >
      Explore All Services
      <ArrowUpRight size={20} />
    </button>
  );
};

export default ExploreAllServicesButton;
