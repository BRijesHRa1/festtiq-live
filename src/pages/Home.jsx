// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import background from "../assets/image1.png";
import casserole1 from "../assets/casserole/Carousel.png";
import casserole2 from "../assets/casserole/casserole2.png";
import casserole3 from "../assets/casserole/casserole3.png";
import casserole4 from "../assets/casserole/casserole4.png";
import casserole5 from "../assets/casserole/casserole5.png";

import event1 from "../assets/events/event1.png";
import event2 from "../assets/events/event2.png";
import event3 from "../assets/events/event3.png";
import event4 from "../assets/events/event4.png";
import event5 from "../assets/events/event5.png";
import event6 from "../assets/events/event6.png";




import MasonaryGrid from "../components/MasonaryGrid";
import GallerySection from "../components/Home/Highlight";
import WhyChooseUs from "../components/Home/ChooseUs";
import Question from "../components/Home/Question";
import EventCover from "../components/Home/EventCover";

export const eventCategories = [
  {
    id: "wedding",
    title: "Wedding",
    image: event1,
    tags: ["Engagement", "Mehndi", "Sangeet", "Wedding Ceremony", "Reception"],
  },
  {
    id: "parties",
    title: "Parties",
    image: event2,
    tags: [
      "Birthday Parties",
      "Anniversary Celebrations",
      "Baby Showers",
      "Farewell Parties",
      "Dinner Parties",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    image: event3,
    tags: [
      "Conferences",
      "Team Outings",
      "Product Launches",
      "Annual General Meetings",
      "Training Sessions",
    ],
  },
  {
    id: "family",
    title: "Family Celebrations",
    image: event4,
    tags: [
      "Family Reunion",
      "Naming Ceremonies",
      "Pet Parties",
      "Get-Together",
      "Retirement Parties",
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment Shows",
    image: event5,
    tags: [
      "Live Concerts",
      "Stand-up Comedy Shows",
      "Movie Screenings",
      "Fashion & Talent Shows",
    ],
  },
  {
    id: "cultural",
    title: "Cultural Events",
    image: event6,
    tags: [
      "Festivals",
      "Community Gatherings",
      "Spiritual Retreats",
      "Traditional Dance or Music Shows",
    ],
  },
];

const images = [casserole1, casserole2, casserole3, casserole4, casserole5];

// src/data/eventCategories.js
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const len = images.length;

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % len);
    }, 3000);
    return () => clearInterval(timer);
  }, [len]);

  // Listen to window resize for responsive logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideStyle = (index) => {
    const position = (index - currentIndex + len) % len;

    const styles = {
      0: {
        transform: isMobile ? "translateX(-160px) scale(0.8)" : "translateX(-380px) scale(0.85)",
        zIndex: 10,
        opacity: 0.6,
        top: isMobile ? "20px" : "60px",
        width: isMobile ? "100px" : "220px",
        height: isMobile ? "120px" : "240px",
      },
      1: {
        transform: isMobile ? "translateX(-80px) scale(0.9)" : "translateX(-200px) scale(0.95)",
        zIndex: 20,
        opacity: 0.85,
        top: isMobile ? "10px" : "30px",
        width: isMobile ? "140px" : "300px",
        height: isMobile ? "160px" : "320px",
      },
      2: {
        transform: isMobile ? "translateX(0px) scale(1)" : "translateX(0px) scale(1.05)",
        zIndex: 30,
        opacity: 1,
        top: "0px",
        width: isMobile ? "180px" : "380px",
        height: isMobile ? "200px" : "380px",
      },
      3: {
        transform: isMobile ? "translateX(80px) scale(0.9)" : "translateX(200px) scale(0.95)",
        zIndex: 20,
        opacity: 0.85,
        top: isMobile ? "10px" : "30px",
        width: isMobile ? "140px" : "300px",
        height: isMobile ? "160px" : "320px",
      },
      4: {
        transform: isMobile ? "translateX(160px) scale(0.8)" : "translateX(380px) scale(0.85)",
        zIndex: 10,
        opacity: 0.6,
        top: isMobile ? "20px" : "60px",
        width: isMobile ? "100px" : "220px",
        height: isMobile ? "120px" : "240px",
      },
    };

    return styles[position] || { display: "none" };
  };

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentIndex((c) => (c + 1) % len);
    }, 3000);
    return () => clearInterval(iv);
  }, [len]);



  return (
    <div>
      <div className="w-full min-h-screen pt-[100px] overflow-x-hidden relative bg-gray-50">
        {/* Background Image */}
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "blur(2px)" }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "#00000099",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />

        {/* Content Section */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-12 lg:px-[96px] pt-24">
          {/* Hero Text */}
          <div className="max-w-[860px] w-full space-y-6">
            <h1 className="py-5"
              style={{
                fontFamily: "Abhaya Libre, serif",
                fontWeight: 400,
                fontSize: "64px",
                lineHeight: "117%",
                letterSpacing: "-1.5px",
                color: "white",
              }}
            >
              Find Your Perfect Venue,
              <br />
              Hassle-Free!
            </h1>

            <p
              className="text-white"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "160%",
                letterSpacing: "0.15px",
              }}
            >
              Discover, compare, and book the best venues for weddings, parties and
              corporate events—all in one place.
            </p>

            <div className="flex justify-center">
              <button className="flex items-center justify-center gap-2 text-[#9C27B0] border-2 border-[#9C27B0] rounded-lg px-5 py-2 text-base sm:text-lg font-medium bg-white hover:bg-[#f3e5f5] transition">
                Explore Venues
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ stroke: "#9C27B0" }}>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            className="relative flex items-center justify-center overflow-visible mt-20"
            style={{ width: "100%", maxWidth: "1300px", height: isMobile ? "240px" : "420px", zIndex: 20 }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className="absolute object-cover transition-all duration-700 ease-in-out"
                style={{
                  ...getSlideStyle(i),
                  borderRadius: "28px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              />
            ))}

            {/* Controls */}
            <button
              onClick={() => setCurrentIndex((currentIndex - 1 + len) % len)}
              className="absolute left-4 text-white text-3xl focus:outline-none z-40"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % len)}
              className="absolute right-4 text-white text-3xl focus:outline-none z-40"
            >
              ›
            </button>
          </div>


        </div>


      </div>
      <EventCover />


      <MasonaryGrid />
      <GallerySection />
      <WhyChooseUs />
      <Question />
    </div>

  );
}
