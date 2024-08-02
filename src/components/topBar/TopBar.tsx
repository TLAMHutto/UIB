import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div
      style={{
        color: '#333',
        width: 'calc(100vw - 500px)', // Full width minus sidebars (250px each)
        height: '50px', // Adjust height as needed
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ddd',
        padding: '10px 20px',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        left: '250px', // Align with LeftSideBar
        zIndex: 1, // Ensure top bar is above canvas and sidebars
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>File</div>
      <div>Edit</div>
      <div>View</div>
      <div>Code</div>
      <div>Help</div>
    </div>
  );
};

export default TopBar;
