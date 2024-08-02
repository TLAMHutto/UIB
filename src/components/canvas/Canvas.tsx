import React, { useRef, useEffect } from 'react';

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Drawing code goes here
        ctx.fillStyle = 'blue';
        ctx.fillRect(50, 50, 100, 100);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: '1px solid black' }}
    ></canvas>
  );
};

export default CanvasComponent;
