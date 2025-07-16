import React, { useState } from 'react';
import avatar from '../assets/venue/avatar.jpg';

const Profile = () => {
  const [fullName, setFullName] = useState("Azhar");
  const [phone, setPhone] = useState("9025040726");
  const [email, setEmail] = useState("azharshine23@gmail.com");
  const [image, setImage] = useState(avatar);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen pt-[100px] bg-white px-4 sm:px-6 md:px-20 py-10 text-[#212121] font-['Plus_Jakarta_Sans']">
      {/* Back Button */}
      <button className="text-2xl mb-6 text-gray-500 hover:text-black">
        ←
      </button>

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Personal Info
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Update your photo and personal details here.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto border rounded-xl shadow-lg p-6 sm:p-10 bg-white">
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Phone & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <span className="bg-gray-100 px-3 py-2 text-sm border-r border-gray-300">IN ▼</span>
                <input
                  type="tel"
                  className="flex-1 px-3 py-2 text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Upload Avatar */}
          <div className="w-full border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center relative">
            <img src={image} alt="Avatar" className="h-14 w-14 rounded-full mb-4 object-cover" />
            <label
              htmlFor="fileUpload"
              className="text-sm text-[#8F24AB] font-medium cursor-pointer underline"
            >
              Click to upload
            </label>
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-xs text-gray-500 mt-2">
              or drag and drop<br />
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              className="px-5 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-5 py-2 rounded-md bg-[#8F24AB] text-white text-sm hover:bg-[#741a92]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
