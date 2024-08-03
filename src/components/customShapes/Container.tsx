import React from 'react';

const Container: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    const styleData = JSON.stringify({
      backgroundColor: 'grey',
      color: 'black',
      padding: '10px 20px',
      margin: '10px 0',
      cursor: 'grab',
      text: 'Container',
      fontFamily: 'sans', // Include font family
      fontSize: '8px', // Example font size
      fontWeight: 'bold', // Example font weight
    });

    e.dataTransfer.setData('text/plain', 'button');
    e.dataTransfer.setData('application/json', styleData);
  };

  return (
    <button
      draggable
      onDragStart={handleDragStart}
      
    >
      Container
    </button>
  );
};

export default Container;
