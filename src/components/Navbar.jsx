// import React, { useState, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { HiLocationMarker } from 'react-icons/hi';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import avatar from '../assets/venue/avatar.jpg';
// import logo from '../assets/Logo (1).png';
// import LoginModal from './Login/LoginModal';
// import OtpModal from './Login/OtpModal';
// import ProfileModal from './Login/ProfileModal';
// import { useClickAway } from 'react-use'; // npm install react-use

// const Navbar = () => {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const dropdownRef = useRef(null);
//   useClickAway(dropdownRef, () => setDropdownOpen(false));

//   const handleGetStartedClick = () => {
//     setIsOpen(false);
//     setShowLogin(true);
//     setShowOtp(false);
//     setShowProfile(false);
//   };

//   return (
//     // <nav className="bg-white shadow-lg border px-4 md:px-8 py-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
//     <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border px-4 md:px-8 py-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-10 w-auto" />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-purple-900">
//           <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-purple-500 pb-1 text-purple-700' : 'hover:text-purple-700'}>Home</NavLink>
//           <NavLink to="/venues" className="hover:text-purple-700">Venues</NavLink>
//           <NavLink to="/services" className="hover:text-purple-700">Services</NavLink>
//           <NavLink to="/gallery" className="hover:text-purple-700">Gallery</NavLink>
//           <NavLink to="/about" className="hover:text-purple-700">About Us</NavLink>
//           <NavLink to="/contact" className="hover:text-purple-700">Contact Us</NavLink>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button className="flex font-semibold items-center border border-[#8F24AB] text-[#8F24AB] px-4 py-1.5 rounded-md text-sm hover:bg-purple-50">
//             <HiLocationMarker className="mr-1 text-lg" />
//             Chennai
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
//               <path d="M7 10l5 5 5-5" stroke="#A020F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>

//           {/* Get Started on Home, Avatar Elsewhere */}
//           {isHome ? (
//             <button
//               onClick={handleGetStartedClick}
//               className="bg-[#8F24AB] font-semibold hover:bg-purple-800 text-white px-5 py-2 rounded-md text-sm shadow"
//             >
//               Get Started
//             </button>
//           ) : (
//             <div className="relative" ref={dropdownRef}>
//               <img
//                 src={avatar}
//                 alt="User Avatar"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="h-9 w-9 rounded-full cursor-pointer border-2 border-purple-300"
//               />

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
//                   <div className="flex items-center gap-3 px-4 py-3 border-b">
//                     <img src={avatar} alt="User" className="h-10 w-10 rounded-full" />
//                     <div>
//                       <p className="font-semibold text-sm">Azhar</p>
//                     </div>
//                   </div>
//                   <ul className="text-sm text-gray-700">
//                     <li>
//                       <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
//                         View profile
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/mybookings" className="block px-4 py-2 hover:bg-gray-100">
//                         My Bookings
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/favorites" className="block px-4 py-2 hover:bg-gray-100">
//                         Favorites
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/notifications" className="block px-4 py-2 hover:bg-gray-100">
//                         Notifications
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/help" className="block px-4 py-2 hover:bg-gray-100">
//                         Help & Support
//                       </a>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => alert("Logged out")}
//                         className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
//                       >
//                         Log out
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Hamburger Menu */}
//       {/* Hamburger + Avatar (Mobile) */}
// <div className="md:hidden flex items-center gap-3">
//   <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 focus:outline-none">
//     {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//   </button>

//   {/* Mobile Avatar Dropdown */}
//   {!isHome && (
//     <div className="relative" ref={dropdownRef}>
//       <img
//         src={avatar}
//         alt="User Avatar"
//         onClick={() => setDropdownOpen(!dropdownOpen)}
//         className="h-8 w-8 rounded-full border border-purple-400 cursor-pointer"
//       />
//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50">
//           <div className="flex items-center gap-3 px-4 py-3 border-b">
//             <img src={avatar} alt="User" className="h-9 w-9 rounded-full" />
//             <div>
//               <p className="font-semibold text-sm">Azhar</p>
//             </div>
//           </div>
//         <ul className="text-sm text-gray-700">
//   <li>
//     <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
//       View Profile
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/mybookings" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
//       My Bookings
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/favorites" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
//       Favorites
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/notifications" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
//       Notifications
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/help" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
//       Help & Support
//     </NavLink>
//   </li>
//   <li>
//     <button
//       onClick={() => {
//         setDropdownOpen(false);
//         alert("Logged out");
//       }}
//       className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
//     >
//       Log out
//     </button>
//   </li>
// </ul>

//         </div>
//       )}
//     </div>
//   )}
// </div>

//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mt-4 flex flex-col space-y-4 md:hidden text-sm font-medium text-purple-900">
//           <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
//           <NavLink to="/venues" onClick={() => setIsOpen(false)}>Venues</NavLink>
//           <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
//           <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
//           <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
//           <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>

//           <button className="flex items-center border border-[#8F24AB] text-[#8F24AB] px-4 py-1.5 rounded-md">
//             <HiLocationMarker className="mr-1 text-lg" />
//             Chennai
//           </button>

//           {isHome ? (
//             <button
//               onClick={handleGetStartedClick}
//               className="bg-[#8F24AB] text-white px-5 py-2 rounded-md shadow"
//             >
//               Get Started
//             </button>
//           ) : (
//             <div className="flex items-center gap-2">
//               <img src={avatar} className="h-9 w-9 rounded-full border border-purple-400" alt="avatar" />
//               <span className="text-sm">Azhar</span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Modals */}
//       <LoginModal
//         show={showLogin}
//         onClose={() => setShowLogin(false)}
//         onContinue={(phone) => {
//           setPhoneNumber(phone);
//           setShowLogin(false);
//           setShowOtp(true);
//         }}
//       />

//       <OtpModal
//         show={showOtp}
//         onClose={() => {
//           setShowOtp(false);
//           setShowLogin(true);
//         }}
//         phoneNumber={phoneNumber}
//         onContinue={() => {
//           setShowOtp(false);
//           setShowProfile(true);
//         }}
//       />

//       <ProfileModal
//         show={showProfile}
//     onClose={() => setShowProfile(false)}
//         onBackToOtp={() => {
//           setShowProfile(false);
//           setShowOtp(true);
//         }}
//       />
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import avatar from '../assets/venue/avatar.jpg';
import logo from '../assets/Logo (1).png';
import LoginModal from './Login/LoginModal';
import OtpModal from './Login/OtpModal';
import ProfileModal from './Login/ProfileModal';
import { useClickAway } from 'react-use';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => setDropdownOpen(false));

  const handleGetStartedClick = () => {
    setIsOpen(false);
    setShowLogin(true);
    setShowOtp(false);
    setShowProfile(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border px-4 md:px-8 py-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-purple-900">
          <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-purple-500 pb-1 text-purple-700' : 'hover:text-purple-700'}>Home</NavLink>
          <NavLink to="/venues" className="hover:text-purple-700">Venues</NavLink>
          <NavLink to="/services" className="hover:text-purple-700">Services</NavLink>
          <NavLink to="/gallery" className="hover:text-purple-700">Gallery</NavLink>
          <NavLink to="/about" className="hover:text-purple-700">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-purple-700">Contact Us</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="flex font-semibold items-center border border-[#8F24AB] text-[#8F24AB] px-4 py-1.5 rounded-md text-sm hover:bg-purple-50">
            <HiLocationMarker className="mr-1 text-lg" />
            Chennai
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="#A020F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isHome ? (
            <button
              onClick={handleGetStartedClick}
              className="bg-[#8F24AB] font-semibold hover:bg-purple-800 text-white px-5 py-2 rounded-md text-sm shadow"
            >
              Get Started
            </button>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <img
                src={avatar}
                alt="User Avatar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-9 w-9 rounded-full cursor-pointer border-2 border-purple-300"
              />

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="flex items-center gap-3 px-4 py-3 border-b">
                    <img src={avatar} alt="User" className="h-10 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-sm">Azhar</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700">
                    <li>
                      <NavLink to="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        View profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mybookings" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        My Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favorites" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Favorites
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/notifications" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Notifications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/help" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Help & Support
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          alert("Logged out");
                        }}
                        className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          {!isHome && (
            <div className="relative" ref={dropdownRef}>
              <img
                src={avatar}
                alt="User Avatar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-8 w-8 rounded-full border border-purple-400 cursor-pointer"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="flex items-center gap-3 px-4 py-3 border-b">
                    <img src={avatar} alt="User" className="h-9 w-9 rounded-full" />
                    <div>
                      <p className="font-semibold text-sm">Azhar</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700">
                    <li>
                      <NavLink to="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        View Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mybookings" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        My Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favorites" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Favorites
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/notifications" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Notifications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/help" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Help & Support
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          alert("Logged out");
                        }}
                        className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden text-sm font-medium text-purple-900">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/venues" onClick={() => setIsOpen(false)}>Venues</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          <button className="flex items-center border border-[#8F24AB] text-[#8F24AB] px-4 py-1.5 rounded-md">
            <HiLocationMarker className="mr-1 text-lg" />
            Chennai
          </button>
          {isHome ? (
            <button
              onClick={handleGetStartedClick}
              className="bg-[#8F24AB] text-white px-5 py-2 rounded-md shadow"
            >
              Get Started
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <img src={avatar} className="h-9 w-9 rounded-full border border-purple-400" alt="avatar" />
              <span className="text-sm">Azhar</span>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onContinue={(phone) => {
          setPhoneNumber(phone);
          setShowLogin(false);
          setShowOtp(true);
        }}
      />
      <OtpModal
        show={showOtp}
        onClose={() => {
          setShowOtp(false);
          setShowLogin(true);
        }}
        phoneNumber={phoneNumber}
        onContinue={() => {
          setShowOtp(false);
          setShowProfile(true);
        }}
      />
      <ProfileModal
        show={showProfile}
        onClose={() => setShowProfile(false)}
        onBackToOtp={() => {
          setShowProfile(false);
          setShowOtp(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
