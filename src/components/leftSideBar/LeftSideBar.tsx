import React from 'react';
// import Container from '../customShapes/Container';
import Button from './components/Button';
const LeftSideBar: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, type: string) => {
    e.dataTransfer.setData('text/plain', type);
  };

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
      <Button />
      {/* Add more draggable items here if needed */}
    </div>
  );
};

export default LeftSideBar;
