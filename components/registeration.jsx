import React from 'react';
import BecomeInstructor from '../components/instructor';
import Upload from '../components/upload';

const Registration = () => {
  return (
    <div className="flex p-5">
      <div>
        <BecomeInstructor/>
      </div>

     
      <div className="flex-1 bg-white p-5">
        <Upload/>
      </div>
    </div>
  );
};

export default Registration;
