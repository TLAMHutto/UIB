// import React from 'react';

// const Container: React.FC = () => {
//   const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
//     e.dataTransfer.setData('text/plain', 'rectangle');
//   };

//   return (
//     <div
//       draggable
//       onDragStart={handleDragStart}
//       style={{
//         width: '50px',
//         height: '50px',
//         backgroundColor: 'gray',
//         margin: '10px 0',
//         cursor: 'grab',
//       }}
//     >
//       {/* Placeholder for draggable rectangle */}
//     </div>
//   );
// };

// export default Container;
import React from 'react';

const Container: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', 'rectangle'); // Define the shape type here
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'gray',
        margin: '10px 0',
        cursor: 'grab',
      }}
    >
      {/* Placeholder for draggable rectangle */}
    </div>
  );
};

export default Container;
