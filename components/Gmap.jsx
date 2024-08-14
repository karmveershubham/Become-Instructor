import Image from 'next/image';
import React from 'react';
import myImage from '../assets/map.png';

const GoogleMapsIntegration = () => {
  return (
    <div className="border p-4 rounded-md shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-2">See near your location</h3>
      <p className="text-gray-600 mb-4">Northern Street, Chicago, United States</p>
      <a href="#" className="text-blue-500 underline mb-4 block">View full map</a>
      <div className="relative w-full h-64">
        <Image
          src={myImage} 
          alt="Map showing nearby location"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default GoogleMapsIntegration;

