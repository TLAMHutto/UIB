import React from 'react';

const LifeSideBar: React.FC = () => {
  return (
    <div
      style={{
        color: '#333',
        width: '250px',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        borderRight: '1px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1, // Ensure sidebar is above canvas
      }}
    >
      {
        <p>Side Bar Left</p>
    }
    </div>
  );
};

export default LifeSideBar;
