import React from 'react';
import Image from 'next/image';
import myImage from '../assets/profile.png';

const ProfilePhotoUpload = () => {
  return (
    <div className="border p-6 rounded-md shadow-md flex flex-col items-center max-w-sm mx-auto">
      <div className="relative w-[147px] h-[147px] mb-4">
        <Image 
          src={myImage} 
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <p className="text-lg font-semibold text-gray-700 mb-2">Upload your Photo</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Select from Computer
      </button>
    </div>
  );
};

export default ProfilePhotoUpload;
