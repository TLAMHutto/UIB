import React from 'react';
// import ReactColor from '../canvas/ReactColor';
// import RGBA from '../rightSideBar/logicComponents/RGBA'
const RightSideBar: React.FC = () => {
  return (
    <div
      style={{
        color: '#333',
        width: '250px',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        borderLeft: '1px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1, // Ensure sidebar is above canvas
      }}
    >
      {
      /* <RGBA /> */
      // <ReactColor />
      }
    </div>
  );
};

export default RightSideBar;
