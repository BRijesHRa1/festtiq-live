import React from "react";
import event1 from "../../assets/venue/image (11).png";
import event2 from "../../assets/venue/image (12).png";
import event3 from "../../assets/venue/image (13).png";
import event4 from "../../assets/venue/image (14).png";
import event5 from "../../assets/venue/image (15).png";
import event6 from "../../assets/venue/image (16).png";

const Favorite = () => {
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
    {
      id: 5,
      title: "MKS Mahal",
      image: event5,
      location: "Anna Nagar, Chennai",
      tags: ["400 Capacity", "5 Rooms", "Indoor"],
      price: "1,00,000",
      rating: 5.0,
    },
    {
      id: 6,
      title: "MKS Mahal",
      image: event6,
      location: "Anna Nagar, Chennai",
      tags: ["400 Capacity", "5 Rooms", "Indoor"],
      price: "1,00,000",
      rating: 5.0,
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 xl:px-20 py-8 max-w-screen-2xl mx-auto">
      {/* Page Heading */}
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#212121]"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Your Favorite Venue
        </h2>
        <p
          className="text-sm text-gray-500 mt-1"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Your saved favorite venues, all in one place
        </p>
      </div>

      {/* Venue Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {venueData.map((venue) => (
          <div
            key={venue.id}
            className="rounded-xl bg-white border border-[#E0E0E0] shadow-sm min-h-[380px] w-full max-w-full mx-auto"
          >
            <div className="relative">
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
              {venue.badge && (
                <span className="absolute top-2 left-2 bg-white text-[10px] font-medium px-2 py-1 rounded-full shadow-sm cursor-pointer hover:underline">
                  👑 {venue.badge}
                </span>
              )}
              <span className="absolute top-2 right-2 text-xl text-red-500 cursor-pointer">
                ❤️
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
    </div>
  );
};

export default Favorite;
