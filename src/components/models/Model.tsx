import React from 'react';

const Model = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' top-0 left-0 fixed z-50 bg-black/10 h-screen w-screen grid place-content-center'>
      {children}
    </div>
  );
};

export default Model;
