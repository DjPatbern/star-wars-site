import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 lg:px-20 2xl:px-0">
      {children}
    </div>
  );
};

export default Container;
