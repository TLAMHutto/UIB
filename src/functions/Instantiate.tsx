// import React, { useState, useRef, useEffect } from 'react';

// interface DraggableProps {
//   onDragPositionChange: (position: { x: number; y: number }) => void;
// }

// const Instantiate: React.FC<DraggableProps> = ({ onDragPositionChange }) => {
//   const [dragging, setDragging] = useState<boolean>(false);
//   const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
//   const componentRef = useRef<HTMLDivElement>(null);

//   const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
//     setDragging(true);
//     e.dataTransfer.setData('text/plain', 'dragging');
//   };

//   const handleDrag = (e: DragEvent) => {
//     if (dragging && componentRef.current) {
//       const x = e.clientX - componentRef.current.offsetWidth / 2;
//       const y = e.clientY - componentRef.current.offsetHeight / 2;

//       setDragPosition({ x, y });
//       onDragPositionChange({ x, y });
//     }
//   };

//   const handleDragEnd = () => {
//     setDragging(false);
//   };

//   useEffect(() => {
//     const handleDragNative = (e: DragEvent) => handleDrag(e);
//     if (dragging) {
//       window.addEventListener('dragover', handleDragNative);
//       window.addEventListener('dragend', handleDragEnd);
//     } else {
//       window.removeEventListener('dragover', handleDragNative);
//       window.removeEventListener('dragend', handleDragEnd);
//     }

//     return () => {
//       window.removeEventListener('dragover', handleDragNative);
//       window.removeEventListener('dragend', handleDragEnd);
//     };
//   }, [dragging]);

//   return (
//     <div
//       ref={componentRef}
//       draggable
//       onDragStart={handleDragStart}
//       style={{
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'blue',
//         cursor: 'move',
//         position: 'absolute',
//         top: dragPosition?.y ?? 0,
//         left: dragPosition?.x ?? 0,
//       }}
//     />
//   );
// };

// export default Instantiate;
