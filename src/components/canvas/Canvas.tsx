import React, { useRef, useEffect } from 'react';

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '50px', // Adjust based on TopBar height
        left: '250px', // Adjust based on LeftSideBar width
        right: '250px', // Adjust based on RightSideBar width
        bottom: '0', // Bottom of the viewport
        width: 'calc(100vw - 500px)', // Full width minus both sidebars (250px each)
        height: 'calc(100vh - 50px)', // Full height minus TopBar height
        backgroundColor: 'white', // Ensure white background
      }}
    ></canvas>
  );
};

export default CanvasComponent;
